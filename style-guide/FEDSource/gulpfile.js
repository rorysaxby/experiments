'use strict';

/************************************************
- Required
*************************************************/

var gulp = require('gulp'),
	sass = require('gulp-sass'),
    rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	gulpUtil = require('gulp-util'),
    sourceMaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    autoPrefix = require('gulp-autoprefixer'),
    svgSprite = require('gulp-svg-sprite');

/************************************************
- Defaults
*************************************************/

var scssFiles = 'src/**/*.scss',
	templateCssDest = '../HTMLTemplate/Web/Site/css/',
    siteCssDest = '../Web/Site/css/',
    scssAutoprefix = 'last 3 versions';

var jsFiles = 'src/**/*.js',
    jsAll = 'script.js',
	templateJsDest = '../HTMLTemplate/Web/Site/script/',
	siteJsDest = '../Web/Site/script/';

// SVG sprite config
var spriteConfig = {
    mode: {
        symbol: {
            dest: '../HTMLTemplate/Web/Site/images/icons/',
            sprite: 'icon-sprite.svg',
            example: true
        }
    },
    svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
    }
};
var iconSrc = 'src/assets/icons/';

/************************************************
- Tasks
*************************************************/

// Compile SCSS for development with source maps
gulp.task('scss_dev', function () {
    return gulp.src(scssFiles)
        .pipe(sourceMaps.init())
        .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourceMaps.write({ includeContent: false, sourceRoot: '.' }))
        .pipe(sourceMaps.init({ loadMaps: true }))
        .pipe(autoPrefix({ browsers: [scssAutoprefix], cascade: false }))
        .pipe(sourceMaps.write('.', { includeContent: false, sourceRoot: '/src' }))
        .pipe(gulp.dest(templateCssDest))
        .pipe(gulp.dest(siteCssDest));
});

// Compile and minify SCSS for production
gulp.task('scss_prod', function () {
    return gulp.src(scssFiles)
		.pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoPrefix({ browsers: [scssAutoprefix], cascade: false }))
        .pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(templateCssDest))
        .pipe(gulp.dest(siteCssDest));
});

// Combine JS into single file for development with source maps
gulp.task('js_dev', function () {
    return gulp.src(jsFiles)
        .pipe(sourceMaps.init())
        .pipe(babel())
		.pipe(concat(jsAll))
        .pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(templateJsDest))
        .pipe(gulp.dest(siteJsDest));
});

// Combine and minify JS for production
gulp.task('js_prod', function () {
    return gulp.src(jsFiles)
        .pipe(babel())
        .pipe(concat(jsAll))
		.pipe(uglify().on('error', gulpUtil.log))
        .pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(templateJsDest))
        .pipe(gulp.dest(siteJsDest));
});

// SVG sprite generation
gulp.task('svg_sprite', function () {
    return gulp.src(iconSrc + '*.svg')
        .pipe(svgSprite(spriteConfig))
        .pipe(gulp.dest('.'));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(scssFiles, ['scss_dev']);
    gulp.watch(jsFiles, ['js_dev']);
});

/************************************************
- Compile Tasks
*************************************************/

gulp.task('dev', ['scss_dev', 'js_dev', 'watch']);

gulp.task('prod', ['scss_prod', 'js_prod']);