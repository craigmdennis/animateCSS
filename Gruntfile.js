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
      ' Licensed MIT */\n\n',
    // Task configuration.
    clean: {
      files: ['dist', '.tmp']
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['.tmp/<%= pkg.name %>.js'],
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

    jade: {
      options: {
        pretty: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'test/',
          dest: '.tmp/',
          src: '*.jade',
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
          dest: '.tmp/',
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
      dist: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['.tmp/{,*/}*.js']
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      jade: {
        files: ['test/*.jade'],
        tasks: ['jade']
      },
      coffee: {
        files: ['src/{,*/}*.coffee'],
        tasks: ['coffee']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.tmp/{,*/}*.*',
        ]
      }
    },

    bump: {
      options: {
        files: ['package.json', 'bower.json', '<%= pkg.name %>.jquery.json'],
        push: true,
        pushTo: 'origin',
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        commitFiles: ['<%= bump.options.files %>', 'CHANGELOG.md'],
        commitMessage: 'Bumped version to v%VERSION%'
      }
    },

    changelog: {
      options: {
        editor: 'atom -w'
      }
    },

    connect: {
      options: {
        hostname: '0.0.0.0',
        livereload: 35729,
        port: 9000
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp/',
            'src/'
          ]
        }
      },
    }
  });

  // Default task.
  grunt.registerTask('default', [
    'clean',
    'compile',
    'jshint:dist',
    'concat',
    'uglify',
  ]);

  // Compile Jade and CoffeeScript
  grunt.registerTask('compile', [
    'newer:coffee',
    'newer:jade'
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
};
