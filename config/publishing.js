'use strict';

module.exports = function( grunt,
                           opts ){
    return {
        tasks : {
            'gh-pages' : {
                options : {
                    base : 'app'
                },
                src     : ['**']
            }

        }
    }
}
