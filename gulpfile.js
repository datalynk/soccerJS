var gulp   = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src(['./js/*.js', '!./js/jquery*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});