// Watches for changes to our files and executes required scripts
gulp.task("watch", function() {
    gulp.watch(paths.scripts, gulp.series("scripts"));
    gulp.watch(paths.dependencies, gulp.series("dependencies"));
    gulp.watch(paths.styles, gulp.series("styles"));
    gulp.watch(paths.content, gulp.series("content"));
    gulp.watch(paths.images, gulp.series("images"));
});

// Launches a test webserver
gulp.task("browserSync", function() {
    browserSync.init({
        server: {
            baseDir: dist + "/public"
        }
    });

    gulp.watch(dist + "/*.html").on("change", browserSync.reload);
    gulp.watch(dist + "/js/*.js").on("change", browserSync.reload);
    gulp.watch(dist + "/app/css/*.css").on("change", browserSync.reload);
});

gulp.task(
    "default",
    gulp.parallel(
        "dependencies",
        "package",
        "styles",
        "content",
        "images",
        "watch",
        "browserSync",
        "generate-service-worker"
    )
);

gulp.task(
    "build",
    gulp.parallel(
        "dependencies",
        "package",
        "styles",
        "content",
        "images",
        "generate-service-worker"
    )
);