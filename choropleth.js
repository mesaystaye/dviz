(function() {
    const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, 100]);

    function getNumericCode(alpha3Code) {
        return window.countryCodeMapping[alpha3Code] || null;
    }

    function getCountryName(numericCode) {
        return window.countryNameMapping[numericCode] || "Unknown";
    }

    window.drawChoropleth = function(containerId, dataUrl, year, colorScaleDomain, title) {
        const margin = { top: 20, right: 20, bottom: 50, left: 50 },
            width = 980 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        let svgContainer = d3.select(containerId);
        let svg = svgContainer.select("svg");

        if (svg.empty()) {
            svg = svgContainer.append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom);

            svg.append("g")
                .attr("class", "mapGroup")
                .attr("transform", `translate(${margin.left},${margin.top})`);

            svg.append("text")
                .attr("class", "title")
                .attr("x", (width / 2))
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .style("text-decoration", "underline")
                .text(title);
        } else {
            svg.select(".title").text(title);
        }

        const mapGroup = svg.select(".mapGroup");

        const projection = d3.geoMercator().scale(130).translate([width / 2, height / 1.5]);
        const path = d3.geoPath().projection(projection);

        colorScale.domain([0, 100]);

        Promise.all([
            d3.json("https://d3js.org/world-110m.v1.json"),
            d3.csv(dataUrl)
        ]).then(function([world, csvData]) {
            const countries = topojson.feature(world, world.objects.countries).features;

            // Populate the properties with country names
            countries.forEach(function(d) {
                d.properties.name = getCountryName(d.id);
            });

            const dataById = {};
            csvData.forEach(function(d) {
                if (d.Year == year) {
                    const numericCode = getNumericCode(d.Code.trim());
                    if (numericCode) {
                        if (dataUrl.includes("broadband")) {
                            dataById[numericCode] = +d['Fixed broadband subscriptions (per 100 people)'];
                        } else if (dataUrl.includes("mobile")) {
                            dataById[numericCode] = +d['Mobile cellular subscriptions (per 100 people)'];
                        } else {
                            dataById[numericCode] = +d['Individuals using the Internet (% of population)'];
                        }
                    }
                }
            });

            countries.forEach(function(d) {
                d.Internet_Usage_Percentage = dataById[d.id] || undefined;
            });

            const paths = mapGroup.selectAll("path")
                .data(countries, d => d.id);

            paths.enter().append("path")
                .attr("d", path)
                .attr("fill", "#ccc")
                .attr("stroke", "#fff")
                .on("mouseover", function(event, d) {
                    const countryName = d.properties.name || "Unknown";
                    d3.select(this).attr("fill", "orange");
                    d3.select(".tooltip")
                        .style("left", event.pageX + 5 + "px")
                        .style("top", event.pageY - 28 + "px")
                        .style("display", "inline-block")
                        .html(`Country: ${countryName}<br>Internet Usage: ${(d.Internet_Usage_Percentage !== undefined ? d.Internet_Usage_Percentage.toFixed(2) : "No data")}%`);
                })
                .on("mouseout", function(d) {
                    d3.select(this).attr("fill", function(d) {
                        return d.Internet_Usage_Percentage !== undefined ? colorScale(d.Internet_Usage_Percentage) : "#ccc";
                    });
                    d3.select(".tooltip").style("display", "none");
                })
                .merge(paths)
                .transition().duration(500)
                .attr("d", path)
                .attr("fill", function(d) {
                    return d.Internet_Usage_Percentage !== undefined ? colorScale(d.Internet_Usage_Percentage) : "#ccc";
                });

            paths.exit().remove();

            // Clear existing legend SVG
            d3.select("#legend").remove();

            // Create new legend SVG
            const legendSvg = d3.select(containerId)
                .append("svg")
                .attr("id", "legend")
                .attr("width", 60)
                .attr("height", height + margin.top + margin.bottom)
                .attr("x", width + margin.left + 20)
                .attr("y", margin.top);

            const legendGroup = legendSvg.append("g")
                .attr("class", "legend");

            const defs = legendSvg.append("defs");

            const linearGradient = defs.append("linearGradient")
                .attr("id", "linear-gradient")
                .attr("x1", "0%")
                .attr("y1", "100%")
                .attr("x2", "0%")
                .attr("y2", "0%");

            linearGradient.selectAll("stop")
                .data([
                    { offset: "0%", color: colorScale(0) },
                    { offset: "100%", color: colorScale(100) }
                ])
                .enter().append("stop")
                .attr("offset", d => d.offset)
                .attr("stop-color", d => d.color);

            const legendWidth = 20;
            const legendHeight = height;

            legendGroup.append("rect")
                .attr("width", legendWidth)
                .attr("height", legendHeight)
                .attr("transform", `translate(0,10)`)
                .style("fill", "url(#linear-gradient)");

            const legendScale = d3.scaleLinear()
                .domain([0, 100])
                .range([legendHeight, 0]);

            const legendAxis = d3.axisRight(legendScale)
                .ticks(5)
                .tickFormat(d => `${d}%`);

            legendGroup.append("g")
                .attr("class", "legend-axis")
                .attr("transform", `translate(${legendWidth},10)`)
                .call(legendAxis);
        }).catch(function(error) {
            console.error("Error loading or processing data:", error);
            d3.select(containerId).append("p")
                .attr("class", "error-message")
                .text("An error occurred while loading the visualization. Please try again later.");
        });
    };
})();
