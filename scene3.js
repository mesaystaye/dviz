// scene3.js
(function() {
    window.initializeScene3 = function(initialYear) {
        drawChoropleth("#scene3", "data/broadband-penetration-by-country.csv", initialYear, [0, 100], "World Broadband Internet Usage Choropleth");
    };

    window.updateScene3 = function(selectedYear) {
        drawChoropleth("#scene3", "data/broadband-penetration-by-country.csv", selectedYear, [0, 100], "World Broadband Internet Usage Choropleth");
    };
})();
