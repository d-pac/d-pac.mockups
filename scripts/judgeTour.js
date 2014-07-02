'use strict';

// Instance the tour
var judgeTour = new Tour( {
    steps : [
        {
            element : "#explanation",
            title   : "Welkom",
            content : "Lees eerst aandachtig de uitleg, zodat je de opdracht goed begrijpt.",
            orphan: true
        },
        {
            element : "#viewer-left",
            title   : "Vergelijken",
            content : "Lees vervolgens beide papers."
        },
        {
            element : "#notes-left",
            title   : "Noteren",
            content : "Als je wil kun je opmerkingen noteren."
        },
        {
            element : "#select-left",
            title   : "Selecteer",
            content : "Wanneer je klaar bent kun je een van de twee papers kiezen als beste."
        }
    ],
    storage: false
} );

// Initialize the tour
judgeTour.init();

// Start the tour
judgeTour.start();
