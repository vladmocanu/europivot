var gulp = require('gulp');


// CSS minify and move
gulp.task('move', function() {
  gulp.src(['./_site/css/main.css'])
    .pipe(gulp.dest('./css/'));
});

// Watch for changes
gulp.task('watch', function() {
	gulp.watch('./_site/css/main.css', ['move']);
});

// Default Task
gulp.task('default', ['move', 'watch']);