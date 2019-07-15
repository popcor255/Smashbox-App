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
var dist = "./server/app";

// Paths to various files
var paths = {
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
    .pipe(gulp.dest(dist + "/css/"));
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
    .pipe(gulp.dest(dist + "/js/"));
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
    .pipe(gulp.dest(dist));
});

// Optimizes our image files and outputs them to app/image/*
gulp.task("images", function() {
  return gulp.src(paths.images).pipe(gulp.dest(dist + "/images/"));
});

// Generate Service Workers
gulp.task("generate-service-worker", () => {
  return workbox
    .generateSW({
      globDirectory: dist,
      globPatterns: ["**/*.{html,js,css,jpg,png}"],
      swDest: dist + "/sw.js",
      clientsClaim: true,
      skipWaiting: true
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

//package.json to app file,
gulp.task("package", function() {
  return gulp.src(paths.package).pipe(gulp.dest("./server/app"));
});

// Watches for changes to our files and executes required scripts
gulp.task("watch", function() {
  gulp.watch(paths.scripts, gulp.series("scripts"));
  gulp.watch(paths.styles, gulp.series("styles"));
  gulp.watch(paths.content, gulp.series("content"));
  gulp.watch(paths.images, gulp.series("images"));
});

// Launches a test webserver
gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "./server/app"
    }
  });

  gulp.watch("./server/app/*.html").on("change", browserSync.reload);
  gulp.watch("./server/app/js/*.js").on("change", browserSync.reload);
  gulp.watch("./server/app/css/*.css").on("change", browserSync.reload);
});

gulp.task(
  "default",
  gulp.parallel(
    "package",
    "styles",
    "scripts",
    "content",
    "images",
    "watch",
    "browserSync",
    "generate-service-worker"
  )
);
