/// <binding ProjectOpened='dev' />
'use strict';

/************************************************
- Required
*************************************************/

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	gulpUtil = require('gulp-util'),
    sassLint = require('gulp-sass-lint'),
    sourceMaps = require('gulp-sourcemaps');

/************************************************
- Defaults
*************************************************/

var scssFiles = 'app/**/*.scss',
	cssDest = 'css/',
    cssFile = 'styles.css',
	jsAll = 'scripts.js',
	jsDest = 'dist/',
	jsFiles = 'app/**/*.js';

/************************************************
- Tasks
*************************************************/

gulp.task('scss_lint', function () {
    gulp.src(cssDest + cssFile)
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

gulp.task('compile_dev', function () {
    gulp.src(scssFiles)
        .pipe(sourceMaps.init())
        .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(cssDest));
});


gulp.task('compile_prod', function(){
    gulp.src(scssFiles)
		.pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
	gulp.watch(scssFiles,['compile_dev']);
	gulp.watch(jsFiles,['js_concat']);
});

gulp.task('js_concat', function(){
	return gulp.src(jsFiles)
		.pipe(concat(jsAll))
		.pipe(gulp.dest(jsDest));
});

gulp.task('js_uglify', ['js_concat'], function(){
	return gulp.src(jsDest + jsAll)
		.pipe(uglify().on('error', gulpUtil.log))
		.pipe(gulp.dest(jsDest));
});

/************************************************
- Compile Tasks
*************************************************/

gulp.task('default', ['compile_dev', 'scss_lint', 'js_concat', 'watch']);

gulp.task('dev', ['compile_dev', 'scss_lint', 'watch']);

gulp.task('prod', ['compile_prod','js_concat','js_uglify']);