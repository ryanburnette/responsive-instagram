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
        "browser": true,
        "devel": true
      }
    }

  , uglify: {
      dist: {
        src: 'jquery.responsiveinstagram.js',
        dest: 'jquery.responsiveinstagram.min.js'
      }
    , test: {
        src: ['jquery.responsiveinstagram.js','test/test.js']
      , dest: 'test/test2.js'
      }
    }

  , connect: {
      server: {
        options: {
          port: 9001
        , base: 'test'
        , livereload: true
        }
      }
    }

  , watch: {
      files: ['jquery.responsiveinstagram.js','test/test.js','test/index.html']
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
  grunt.registerTask('devserve', ['connect','watch']);
};
