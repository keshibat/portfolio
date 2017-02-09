// use strict
// 'use strict';

/**
    * TODO
    *
    * => refactor below into Knockout.js  
*/

/*
 * Open the drawer when the menu icon is clicked
 */
// var menu = document.querySelector('#menu');
// var main = document.querySelector('main');
// var drawer = document.querySelector('.nav');

// menu.addEventListener('click', function(e) {
//   drawer.classList.toggle('open');
//   e.stopPropagation();
// });
// main.addEventListener('click', function() {
//   drawer.classList.remove('open');
// });

/* ==========================================================================
    Knockout
========================================================================== */

var portfolioModals = [
    {
        portfolioImage: "images/python_blog_medium.png",
        portfolioAlt: "Udacity - Blog App",
        portfolioTitle: "Blog App",
        portfolioDemoURL: "https://cubiio-blog.appspot.com/",
        portfolioSourceURL: "https://github.com/cubiio/fsnd-blog"
    }, {
        portfolioImage: "images/item_catalog_medium.png",
        portfolioAlt: "Udacity - Item Catalogue App",
        portfolioTitle: "Item Catalogue App",
        portfolioDemoURL: "https://github.com/cubiio/fsnd-item_catalog",
        portfolioSourceURL: "https://github.com/cubiio/fsnd-item_catalog"
    }, {
        portfolioImage: "images/wikipediaViewer_medium.png",
        portfolioAlt: "Free Code Camp - Wikipedia Viewer App",
        portfolioTitle: "Wikipedia Viewer App",
        portfolioDemoURL: "http://fccwikipediaviewer.surge.sh/",
        portfolioSourceURL: "https://github.com/cubiio/fccfe-wikipediaViewer"
    }, {
        portfolioImage: "images/localWeather_medium.png",
        portfolioAlt: "Free Code Camp - Local Weather App",
        portfolioTitle: "Local Weather App",
        portfolioDemoURL: "http://local-weather-fcc.surge.sh/",
        portfolioSourceURL: "https://github.com/cubiio/fccfe-localWeather"
    }, {
        portfolioImage: "images/randomQuote_medium.png",
        portfolioAlt: "Free Code Camp - Random Quotes App",
        portfolioTitle: "Random Quotes App",
        portfolioDemoURL: "https://cubiio.github.io/fccfe-randomQuoteGenerator/",
        portfolioSourceURL: "https://github.com/cubiio/fccfe-randomQuoteGenerator"
    }
]

var Portfolio = function(data) {
    this.portfolioImage = ko.observable(data.portfolioImage);
    this.portfolioAlt = ko.observable(data.portfolioAlt);
    this.portfolioTitle = ko.observable(data.portfolioTitle);
    this.portfolioDemoURL = ko.observable(data.portfolioDemoURL);
    this.portfolioSourceURL = ko.observable(data.portfolioSourceURL);
}

var ViewModel = function() {

    // Point to access the outer 'this' i.e. from ViewModel.
    var self = this;

    // Create an empty observableArray.
    this.portfolioModalList = ko.observableArray( [] );

    // From portfolioModals push to the observableArray.
    portfolioModals.forEach(function(modalItem) {
        self.portfolioModalList.push( new Portfolio(modalItem) );
    });

    // Sets the currentModal to the default of zero indexed item.
    this.currentModal = ko.observable( this.portfolioModalList()[0] );

    // Used with data bind 'visible'. False means hidden.
    this.toggleModal = ko.observable(false);

    // Sets the clickedModal to the currentModal for render,
    // and toggles 'visible' to true i.e. to visible.
    this.selectModal = function(clickedModal) {
        console.log('you clicked on a modal');
        self.currentModal(clickedModal);
        self.toggleModal(true);
    };

    // Toggles the 'visible' data-bind to false i.e. hidden.
    this.closeModal = function() {
        console.log('you closed the modal!')
        self.toggleModal(false);
    };

}

ko.applyBindings(new ViewModel());
