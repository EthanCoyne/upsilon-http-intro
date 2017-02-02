var sources = ['public/scripts/*.js', '!public/scripts/client.min.js']

module.exports = function(grunt) {
  // intitalizing the configs
  grunt.initConfig({

    //uglify task
    uglify: {
      dist: {
        src: sources,
        dest: 'public/scripts/client.min.js'
      }
    },

    //clean task
    clean: ['public/scripts/client.min.js', 'public/vendors/*'],

    //watch task
    watch: {
      files: sources,
      tasks: ['default']
    },

    //copy task
    copy: {
      files: {
        src: ['node_modules/angular/angular.min.js'],
        dest: 'public/vendors/',
        expand: true,
        flatten: true
      }
    }

  }); // end grunt.initConfig()

  //loading all tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  //declaring default task (optional)
  grunt.registerTask('default', ['clean', 'uglify', 'copy']);
};
