// main.js

const state = {
  scene: 2, // Set default scene to 2
  connectionType: 'general', // 'general', 'broadband', 'mobile'
  years: {
    general: 2018,
    broadband: 2018,
    mobile: 2018
  }
};

const scripts = [
  'country-codes.js',
  'choropleth.js',  // Load choropleth.js before scene scripts
  'scene2.js',
  'scene3.js',
  'scene4.js'
];

scripts.forEach(script => {
  const scriptTag = document.createElement('script');
  scriptTag.src = script;
  document.head.appendChild(scriptTag);
});

// Function to show scenes and update state
function showScene(sceneNumber) {
  state.scene = sceneNumber;

  // Set connection type based on scene number
  if (sceneNumber === 2) {
    state.connectionType = 'general';
    d3.select("#sceneTitle").text("World Internet Usage");
  } else if (sceneNumber === 3) {
    state.connectionType = 'broadband';
    d3.select("#sceneTitle").text("World Broadband Internet Usage");
  } else if (sceneNumber === 4) {
    state.connectionType = 'mobile';
    d3.select("#sceneTitle").text("World Mobile Internet Usage");
  }

  d3.selectAll(".container").classed("active", false);
  d3.select(`#scene${sceneNumber}`).classed("active", true);

  // Make slider invisible for non-choropleth scenes
  d3.select("#sliderContainer").style("visibility", "visible");

  // Update the slider to reflect the current state
  updateSlider();

  // Update the visualization for the current scene
  updateScene();
}

// Function to update the visualization based on the current state
function updateScene() {
  const year = state.years[state.connectionType] || d3.select("#yearSlider").attr("value");

  if (state.connectionType === 'general') {
    updateScene2(year);
  } else if (state.connectionType === 'broadband') {
    updateScene3(year);
  } else if (state.connectionType === 'mobile') {
    updateScene4(year);
  }
}

// Function to update the slider based on the current state
function updateSlider() {
  const year = state.years[state.connectionType];
  d3.select("#yearSlider").property("value", year);
  d3.select("#yearValue").text(year);
}

// Populate the year selection slider
d3.csv("data/share-of-individuals-using-the-internet.csv").then(data => {
    const years = Array.from(new Set(data.map(d => +d.Year))).sort((a, b) => a - b);
    const defaultYear = 2018;
    state.years.general = defaultYear;
    state.years.broadband = defaultYear;
    state.years.mobile = defaultYear;

    const slider = d3.select("#yearSlider")
        .attr("min", d3.min(years))
        .attr("max", d3.max(years))
        .attr("value", defaultYear);

    d3.select("#yearValue").text(defaultYear);

    // Add event listener for changes in slider
    slider.on("input", function() {
        const selectedYear = this.value;
        d3.select("#yearValue").text(selectedYear);
        state.years[state.connectionType] = selectedYear;
        updateScene();
    });

    // Initialize the scenes once
    initializeScene2(state.years.general);
    initializeScene3(state.years.broadband);
    initializeScene4(state.years.mobile);

    // Initial draw with the first year
    showScene(state.scene);
});

// Initial draw
d3.select("#sceneTitle").text("World Internet Usage");
drawScene2();
showScene(2);
