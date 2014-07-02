var gulp = require('gulp');


// CSS minify and move
gulp.task('move', function() {
  gulp.src(['./_site/css/main.css'])
    .pipe(gulp.dest('./css/'));
});
