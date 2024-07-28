// scene4.js
(function() {
    window.initializeScene4 = function(initialYear) {
        drawChoropleth("#scene4", "data/mobile-cellular-subscriptions-per-100-people.csv", initialYear, [0, 100], "World Mobile Internet Usage Choropleth");
    };

    window.updateScene4 = function(selectedYear) {
        drawChoropleth("#scene4", "data/mobile-cellular-subscriptions-per-100-people.csv", selectedYear, [0, 100], "World Mobile Internet Usage Choropleth");
    };
})();
