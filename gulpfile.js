var gulp    = require('gulp'),
gutil   = require('gulp-util');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src(['./*.js', './*.css', './*.txt'])
    .pipe(ghPages());
 });
