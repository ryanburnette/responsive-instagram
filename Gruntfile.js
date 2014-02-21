module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      dist: ['jquery.responsiveinstagram.js'],
      options: {
        "curly": true,
        "eqnull": true,
        "eqeqeq": true,
        "undef": true,
        "laxcomma": true,
        "dists": {
          "jQuery": true
        },
        "browser": true,
        "devel": true
      }
    }

  , uglify: {
      dist: {
        src: 'jquery.responsiveinstagram.js',
        dest: 'jquery.responsiveinstagram.min.js'
      }
    }

  , connect: {
      server: {
        options: {
          port: 9001
        , base: '.'
        , livereload: true
        }
      }
    }

  , watch: {
      files: ['jquery.responsiveinstagram.js']
    , tasks: ['jshint', 'uglify']
    , options: {
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('dev', ['jshint','uglify']);
  grunt.registerTask('devlive', ['connect','watch']);
};
