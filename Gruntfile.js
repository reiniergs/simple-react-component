'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            jsx : {
                files: ['src/**/*.jsx'],
                tasks: ['react','browserify']
            },
            css: {
                files: 'src/scss/**/*.scss',
                tasks: ['compass'],
                options: {
                  livereload: true,
                }
            },    
        },
        react: {
            files: {
              expand: true,
              cwd: 'src/jsx',
              src: ['**/*.jsx'],
              dest: 'build/js',
              ext: '.js' 
            }
        },
        compass: {                  
            dev: {                    
                options: {
                  sassDir: 'src/scss',
                  cssDir:  'dist/css'
                }
            }
        },
        browserify : {
            dist : {
                files : {
                    'dist/<%= pkg.name %>.js' : ['build/**/*.js'] 
                }
            },
            options : {
                browserifyOptions : {
                    debug : true
                },
                exclude : ['react']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['watch']);
};