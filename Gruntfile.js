// Generated on 2014-07-02 using generator-webapp 0.4.9
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function( grunt ){

    // Load grunt tasks automatically
    require( 'jit-grunt' )( grunt );

    // Time how long tasks take. Can help when optimizing build times
    require( 'time-grunt' )( grunt );

    // Configurable paths
    var config = {
        app  : 'app',
        dist : 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig( require( 'load-grunt-configs' )( grunt, {

        // Project settings
        config : config

    } ) );

    grunt.registerTask( 'serve', function( target ){
        grunt.task.run( [
            'connect:livereload',
            'watch'
        ] );
    } );

    grunt.registerTask('publish', ['gh-pages']);

};
