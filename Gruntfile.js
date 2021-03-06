module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["src/css/"],
        },
        files: {
          "dist/css/style.css": "src/css/style.less"
        }
      }
    },
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'dist/js/script.min.js': ['src/js/script.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/style.min.css': ['dist/css/style.css']
        }
      }
    },   
    watch: {
      files: ['src/**/*'],
      tasks: ['jshint', 'less', 'cssmin','uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['jshint']);
};