// scene2.js
(function() {
    window.initializeScene2 = function(initialYear) {
        drawChoropleth("#scene2", "data/share-of-individuals-using-the-internet.csv", initialYear, [0, 100], "World Internet Usage Choropleth");
    };

    window.updateScene2 = function(selectedYear) {
        drawChoropleth("#scene2", "data/share-of-individuals-using-the-internet.csv", selectedYear, [0, 100], "World Internet Usage Choropleth");
    };
})();
