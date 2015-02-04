(function() {
  'use strict';

  var gulp = require('gulp'),
      mocha = require('gulp-mocha'),
      jshint = require('gulp-jshint'),
      jscs = require('gulp-jscs'),
      gulpUtil = require('gulp-util'),
      stylish = require('jshint-stylish');

  gulp.task('mocha', function() {
    return gulp.src(['lib/**/*.spec.js', 'test/**/*.js'], {read: false})
                .pipe(mocha({reporter: 'spec'})) // the reporter is the way mocha will display the test
                .on('error', gulpUtil.log); // if we dont do this than gulp will close when an error is thrown 
  });
})();
// it's called immediately