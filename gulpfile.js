var gulp = require("gulp");
var minifycss = require("gulp-clean-css");
var browserSync = require("browser-sync").create();
var uglify = require("gulp-uglify");
var concatify = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
var minifyhtml = require("gulp-minify-html");
var workbox = require("workbox-build");
var babel = require("gulp-babel");
var jsdoc = require("gulp-jsdoc3");
var process = require("process");
var dist = "./build/app";

//
// Paths to various files
var paths = {
    dependencies: ["source/js/**/*"],
    scripts: ["source/js/*.js"],
    styles: ["source/css/**/*.css"],
    images: ["source/images/**/*"],
    content: ["source/*.html", "source/manifest.json"],
    package: ["package.json", "package-lock.json", "README.md"]
};

//Create Documentation based off javascript
gulp.task("doc", function(cb) {
    var config = require("./jsdoc.json");
    return gulp
        .src(["README.md", paths.scripts], { read: false })
        .pipe(jsdoc(config, cb));
});

// Compress css files and outputs them to app/css/*.css
gulp.task("styles", function() {
    return gulp
        .src(paths.styles)
        .pipe(minifycss({ compatibility: "ie8" }))
        .pipe(gulp.dest(dist + "/public/css/"));
});

// Concats & minifies js files and outputs them to app/js/app.js
gulp.task("scripts", function() {
    return gulp
        .src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(concatify("app.js"))
        .pipe(
            babel({
                presets: ["@babel/preset-env"]
            })
        )
        .pipe(gulp.dest(dist + "/public/js/"));
});

gulp.task("dependencies", function() {
    return gulp.src(paths.dependencies).pipe(gulp.dest(dist + "/public/js/"));
});

// Minifies our HTML files and outputs them to app/*.html
gulp.task("content", function() {
    return gulp
        .src(paths.content)
        .pipe(
            minifyhtml({
                empty: true,
                quotes: true
            })
        )
        .pipe(gulp.dest(dist + "/public"));
});

// Optimizes our image files and outputs them to app/image/*
gulp.task("images", function() {
    return gulp.src(paths.images).pipe(gulp.dest(dist + "/public/images/"));
});

// Generate Service Workers
gulp.task("generate-service-worker", () => {
    return workbox
        .generateSW({
            globDirectory: dist + "/public",
            globPatterns: ["**/*.{html,js,css,jpg,png}"],
            swDest: dist + "/public/sw.js",
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [{
                urlPattern: new RegExp('http://localhost/smashbox/product_type/'),
                handler: 'CacheFirst'
            }]
        })
        .then(({ warnings }) => {
            // In case there are any warnings from workbox-build, log them.
            for (const warning of warnings) {
                console.warn(warning);
            }
            console.info("Service worker generation completed.");
        })
        .catch(error => {
            console.warn("Service worker generation failed:", error);
        });
});

//package.json, manifest and package-lock.json to app file,
gulp.task("package", function() {
    return gulp.src(paths.package).pipe(gulp.dest(dist));
});

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