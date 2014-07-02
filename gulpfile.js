var deploy = require("gulp-gh-pages");

gulp.task('deploy', function () {
    gulp.src("./europivot/**/*")
        .pipe(deploy(options));
});