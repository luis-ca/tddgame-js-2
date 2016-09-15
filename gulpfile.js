var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src(['spec/*.js'])
    .pipe(mocha());
});

gulp.task('test:watch', function() {
  return gulp.watch([
    'spec/**/*.js',
    'src/**/*.js'
  ], ['test']);
});
