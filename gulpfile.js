"use strict";
var tap = require('gulp-tap')
var gulp = require('gulp'),
    boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);

gulp.task('copy:data', function () {
  console.log('running task copy:data ')
  gulp.src('lib/data.json')
    .pipe(tap(function(file, t) {
    }))
    .pipe(gulp.dest('build/lib/'));
})

boilerplate({
  extraDefaultTasks: ['copy:data'],
  extraPrepublishTasks: ['copy:data'],
  build: 'turtle',
  jscs: false,
  jshint: false});
