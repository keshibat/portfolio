/* jshint undef: true, unused: true */
/* globals ko */

// use strict
"use strict";

var portfolioModals = [
    {
        portfolioImage: "images/map_medium.png",
        portfolioAlt: "Udacity - Map App",
        portfolioTitle: "Neighbourhood Map App",
        portfolioSnippet: "MVVM | JavaScript | Knockout.js | 3rd Party APIs",
        portfolioDemoURL: "http://cubiio-map.surge.sh/",
        portfolioSourceURL: "https://github.com/cubiio/fsnd-neighbourhood-map",
        portfolioSummary: "Built with a MVVM design paradigm, using JavaScript and Knockout.js. APIs used are Google Maps for the map and location markers with venue information accessed via Foursquare. Functionality includes user input to filter the list of venues, and users can favourite locations."
    }, {
        portfolioImage: "images/markdown-previewer_medium.png",
        portfolioAlt: "Markdown Previewer App",
        portfolioTitle: "Markdown Previewer App",
        portfolioSnippet: "React.js",
        portfolioDemoURL: "https://build-cneetxakhr.now.sh/",
        portfolioSourceURL: "https://github.com/cubiio/react-markdownPreviewer",
        portfolioSummary: "Built with React.js, user typed markdown is rendered in HTML in the preview pane."
    }, {
        portfolioImage: "images/item_catalog_medium.png",
        portfolioAlt: "Udacity - Item Catalogue App",
        portfolioTitle: "Item Catalogue App",
        portfolioSnippet: "Python | Flask | SQLAlchemy | Jinja2",
        portfolioDemoURL: "https://github.com/cubiio/fsnd-item_catalog",
        portfolioSourceURL: "https://github.com/cubiio/fsnd-item_catalog",
        portfolioSummary: "Built with Python Flask, SQLAlchemy, Jinja2 and Bootstrap. Functionality includes OAuth v2.0 integration for Google accounts, and CRUD with CSRF protection for entries and local permission systems."
    }, {
        portfolioImage: "images/python_blog_medium.png",
        portfolioAlt: "Udacity - Blog App",
        portfolioTitle: "Blog App",
        portfolioSnippet: "Python | Google App Engine | Jinja2",
        portfolioDemoURL: "https://cubiio-blog.appspot.com/",
        portfolioSourceURL: "https://github.com/cubiio/fsnd-blog",
        portfolioSummary: "Built with Python, Google App Engine, and Jinja2. Functionality includes user access controls with signup, login and logout, and password hashing. CRUD local permission systems for posts, comments and likes."
    }, {
        portfolioImage: "images/wikipediaViewer_medium.png",
        portfolioAlt: "Wikipedia Viewer App",
        portfolioTitle: "Wikipedia Viewer App",
        portfolioSnippet: "Javascript | jQuery | 3rd Party API",
        portfolioDemoURL: "http://fccwikipediaviewer.surge.sh/",
        portfolioSourceURL: "https://github.com/cubiio/fccfe-wikipediaViewer",
        portfolioSummary: "Built with Javascript, HTML and CSS. Based on user input a call is made to Wikipedia API and search results displayed in the app."
    }, {
        portfolioImage: "images/localWeather_medium.png",
        portfolioAlt: "Local Weather App",
        portfolioTitle: "Local Weather App",
        portfolioSnippet: "Javascript | jQuery | 3rd Party API",
        portfolioDemoURL: "http://local-weather-fcc.surge.sh/",
        portfolioSourceURL: "https://github.com/cubiio/fccfe-localWeather",
        portfolioSummary: "Built with Javascript and jQuery. An API call to DarkSky returns weather local to the user."
    }, {
        portfolioImage: "images/drum-machine_medium.png",
        portfolioAlt: "JavaScript Drum Machine",
        portfolioTitle: "JavaScript Drum Machine",
        portfolioSnippet: "Javascript",
        portfolioDemoURL: "http://cubiio-drumhook.surge.sh/",
        portfolioSourceURL: "https://github.com/cubiio/js-drum-machine",
        portfolioSummary: "Built with Javascript. A simple drum machine, hit a key and a drum sound plays."
    }
];

var Portfolio = function(data) {
    this.portfolioImage = ko.observable(data.portfolioImage);
    this.portfolioAlt = ko.observable(data.portfolioAlt);
    this.portfolioTitle = ko.observable(data.portfolioTitle);
    this.portfolioSnippet = ko.observable(data.portfolioSnippet);
    this.portfolioDemoURL = ko.observable(data.portfolioDemoURL);
    this.portfolioSourceURL = ko.observable(data.portfolioSourceURL);
    this.portfolioSummary = ko.observable(data.portfolioSummary);
};

var ViewModel = function() {

    // Pointer to access the outer 'this' i.e. from ViewModel.
    var self = this;

    // Create an empty observableArray.
    this.portfolioModalList = ko.observableArray( [] );

    // From portfolioModals push to the observableArray.
    portfolioModals.forEach(function(modalItem) {
        self.portfolioModalList.push( new Portfolio(modalItem) );
    });

    // Sets the currentModal to the default of zero indexed item.
    this.currentModal = ko.observable( this.portfolioModalList()[0] );

    // Used with data bind 'style'. False means 'display: none'.
    this.toggleModal = ko.observable(false);

    // Sets the clickedModal to the currentModal for render,
    // and toggles 'visible' to true i.e. to visible.
    this.selectModal = function(clickedModal) {
        // console.log('you clicked on a modal');
        // selects the modal object.
        self.currentModal(clickedModal);
        // true sets css style to 'display: block'.
        self.toggleModal(true);
    };

    // Toggles the 'visible' data-bind to false i.e. hidden.
    this.closeModal = function() {
        // console.log('you closed the modal!')
        self.toggleModal(false);
    };

    // Used to toggle CSS class '.open' - false means '.open'
    // is not applied to the nav element. 
    this.toggleDrawer = ko.observable(false);

    // Sets CSS class '.open' to true if false and vice versa.
    this.openDrawer = function() {
        // console.log("hamburgers!")
        self.toggleDrawer( !self.toggleDrawer() );
    };

};

ko.applyBindings(new ViewModel());
