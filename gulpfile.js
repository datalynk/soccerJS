var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    qunit  = require('gulp-qunit');

gulp.task('test', function() {
    return gulp.src('./qunit/test-runner.html')
        .pipe(qunit());
});

gulp.task('lint', function() {
  return gulp.src(['./js/*.js', '!./js/jquery*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});