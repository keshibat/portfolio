var portfolioModals = [
    {
        portfolioImage: "images/python_blog_medium.png",
        portfolioAlt: "Udacity - Blog App",
        portfolioTitle: "Blog App",
        portfolioDemoURL: "https://cubiio-blog.appspot.com/",
        portfolioSourceURL: "https://github.com/cubiio/fsnd-blog",
        portfolioSummary: "Built with Python, Google App Engine, and Jinja2. Functionality includes user access controls with signup, login and logout, and password hashing. CRUD local permission systems for posts, comments and likes."
    }, {
        portfolioImage: "images/item_catalog_medium.png",
        portfolioAlt: "Udacity - Item Catalogue App",
        portfolioTitle: "Item Catalogue App",
        portfolioDemoURL: "https://github.com/cubiio/fsnd-item_catalog",
        portfolioSourceURL: "https://github.com/cubiio/fsnd-item_catalog",
        portfolioSummary: "Built with Python Flask, SQLAlchemy, Jinja2 and Bootstrap. Functionality includes OAuth v2.0 integration for Google accounts, and CRUD with CSRF protection for entries and local permission systems."
    }, {
        portfolioImage: "images/wikipediaViewer_medium.png",
        portfolioAlt: "Free Code Camp - Wikipedia Viewer App",
        portfolioTitle: "Wikipedia Viewer App",
        portfolioDemoURL: "http://fccwikipediaviewer.surge.sh/",
        portfolioSourceURL: "https://github.com/cubiio/fccfe-wikipediaViewer",
        portfolioSummary: "Built with Javascript, HTML and CSS. Based on user input a call is made to Wikipedia API and search results displayed in the app."
    }, {
        portfolioImage: "images/localWeather_medium.png",
        portfolioAlt: "Free Code Camp - Local Weather App",
        portfolioTitle: "Local Weather App",
        portfolioDemoURL: "http://local-weather-fcc.surge.sh/",
        portfolioSourceURL: "https://github.com/cubiio/fccfe-localWeather",
        portfolioSummary: "Built with Javascript and jQuery. An API call to DarkSky returns weather local to the user."
    }, {
        portfolioImage: "images/randomQuote_medium.png",
        portfolioAlt: "Free Code Camp - Random Quotes App",
        portfolioTitle: "Random Quotes App",
        portfolioDemoURL: "https://cubiio.github.io/fccfe-randomQuoteGenerator/",
        portfolioSourceURL: "https://github.com/cubiio/fccfe-randomQuoteGenerator",
        portfolioSummary: "Buit with Javascript, this app displays a random quote. The user may Tweet the random quote via a Tweet button."
    }
]

var Portfolio = function(data) {
    this.portfolioImage = ko.observable(data.portfolioImage);
    this.portfolioAlt = ko.observable(data.portfolioAlt);
    this.portfolioTitle = ko.observable(data.portfolioTitle);
    this.portfolioDemoURL = ko.observable(data.portfolioDemoURL);
    this.portfolioSourceURL = ko.observable(data.portfolioSourceURL);
    this.portfolioSummary = ko.observable(data.portfolioSummary);
}

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

    this.toggleDrawer = ko.observable(false);

    this.openDrawer = function() {
        // console.log("hamburgers!")
        self.toggleDrawer( !self.toggleDrawer() );
    };

}

ko.applyBindings(new ViewModel());
