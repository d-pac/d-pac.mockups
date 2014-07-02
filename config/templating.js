'use strict';

module.exports = function( grunt,
                           opts ){
    return {
        tasks : {
            generate : {
                options : {
                    dest   : '<%= config.app %>',
                    prompt : false
                }
            }
        }
    }
}
