'use strict';

module.exports = function( grunt,
                           opts ){
    var config = opts.config;
    return {
        tasks : {
            includes : {
                files   : {
                    src     : ['app/src/*.html'],
                    dest    : 'app/static',
                    flatten : true
                },
                options : {
                    template : "<!-- BEGIN {{fileName}} -->\n{{file}}<!-- END {{fileName}} -->"
                }
            }
        }
    };
};
