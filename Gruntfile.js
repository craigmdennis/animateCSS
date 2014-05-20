'use strict';

module.exports = function (grunt) {
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed MIT */\n',
    // Task configuration.
    clean: {
      files: ['dist']
    },

    // Automatically inject Bower components into the HTML file
    bowerInstall: {
      src: ['src/index.jade'],
      ignorePath: 'test/'
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/jquery.<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/jquery.<%= pkg.name %>.min.js'
      }
    },

    qunit: {
      all: {
        options: {
          urls: ['http://localhost:9000/test/<%= pkg.name %>.html']
        }
      }
    },

    jade: {
      options: {
        pretty: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          dest: 'test/',
          src: 'index.jade',
          ext: '.html'
        }]
      },
    },

    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '{,*/}*.coffee',
          dest: 'test/',
          ext: '.js'
        }]
      }
    },

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'src/.jshintrc'
        },
        src: ['src/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      jade: {
        files: ['src/index.jade'],
        tasks: ['jade']
      },
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
      },
      coffee: {
        files: ['src/{,*/}*.coffee'],
        tasks: ['coffee']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
    },

    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          port: 9000
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', [
    'clean',
    'test', // jade, coffeescript, jshint, qunit
    'concat',
    'uglify',
  ]);

  // Compile Jade and CoffeeScript
  grunt.registerTask('compile', [
    'newer:coffee',
    'newer:jade'
  ]);

  // Install Bower components
  grunt.registerTask('bowerInstall', [
    'bower'
  ]);

  // Server task
  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('serve', [
    'compile', // jade, coffeescript
    'connect',
    'watch'
  ]);

  grunt.registerTask('test', [
    'compile', // jade, coffeescript
    'jshint',
    'qunit'
  ]);
};
