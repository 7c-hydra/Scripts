(function() {
    const libraries = [
        { name: 'jQuery', object: window.jQuery, version: () => window.jQuery.fn.jquery },
        { name: 'React', object: window.React, version: () => window.React.version },
        { name: 'AngularJS', object: window.angular, version: () => window.angular.version.full },
        { name: 'Vue.js', object: window.Vue, version: () => window.Vue.version },
        { name: 'Ember.js', object: window.Ember, version: () => window.Ember.VERSION },
        { name: 'Backbone.js', object: window.Backbone, version: () => window.Backbone.VERSION },
        { name: 'Lodash', object: window._, version: () => window._.VERSION },
        { name: 'Underscore.js', object: window._, version: () => window._.VERSION },
        { name: 'D3.js', object: window.d3, version: () => window.d3.version },
        { name: 'Moment.js', object: window.moment, version: () => window.moment.version },
    ];

    const results = libraries
        .filter(lib => lib.object) // Check if library is loaded
        .map(lib => ({ name: lib.name, version: lib.version() }))
        .filter(lib => lib.version); // Exclude if version is undefined

    if (results.length > 0) {
        console.table(results);
    } else {
        console.log("No common JavaScript libraries detected.");
    }
})();
