'use strict';
var gulp        = require('gulp');

gulp.task('watch', function() {
  return gulp.watch(['app/**/*'], function(){
    var d;
    d = new Date();
    console.log('updated ui-utils...', d.getHours()+':'+d.getMinutes()+':'+d.getSeconds());
  });
});

gulp.task('build', ['sass', 'browserify']);

gulp.task('default', ['build']);