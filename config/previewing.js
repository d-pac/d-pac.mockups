'use strict';

module.exports = function( grunt,
                           opts ){
    var config = opts.config;
    return {
        tasks : {
            // Watches files for changes and runs tasks based on the changed files
            watch   : {
                build      : {
                    files : [
                        '<%= config.app %>/src/{,*/}*.html'
                    ],
                    tasks : 'build'
                },
                livereload : {
                    options : {
                        livereload : '<%= connect.options.livereload %>'
                    },
                    files   : [
                        '<%= config.app %>/index.html',
                        '<%= config.app %>/static/{,*/}*.html',
                        '<%= config.app %>/styles/*.css',
                        '<%= config.app %>/scripts/*.js',
                        '<%= config.app %>/images/{,*/}*'
                    ]
                }
            },

            // The actual grunt server settings
            connect : {
                options    : {
                    port       : 9000,
                    open       : true,
                    livereload : 35729,
                    // Change this to '0.0.0.0' to access the server from outside
                    hostname   : 'localhost'
                },
                livereload : {
                    options : {
                        middleware : function( connect ){
                            return [
                                connect.static( config.app )
                            ];
                        }
                    }
                }
            }

        }
    }
}
