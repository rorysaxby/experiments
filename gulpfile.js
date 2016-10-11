/************************************************
- Required
*************************************************/

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/************************************************
- Defaults
*************************************************/

var scssFiles = 'scss/**/*.scss',
	cssDest = './css/',
	jsAll = 'all.js',
	jsDest = 'js/',
	jsFiles = [
		'js/main.js'
	];

/************************************************
- Tasks
*************************************************/

gulp.task('compile_dev', function(){
	gulp.src(scssFiles)
		.pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest(cssDest));
});

gulp.task('compile_prod', function(){
	gulp.src(scssFiles)
		.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
	gulp.watch(scssFiles,['compile_dev'])
});

gulp.task('js_concat', function(){
	return gulp.src(jsFiles)
		.pipe(concat(jsAll))
		.pipe(gulp.dest(jsDest));
});

gulp.task('js_uglify', ['js_concat'], function(){
	return gulp.src(jsDest + jsAll)
		.pipe(uglify())
		.pipe(gulp.dest(jsDest));
});

/************************************************
- Compile Tasks
*************************************************/

gulp.task('default', ['compile_dev','watch','concat']);

gulp.task('dev', ['compile_dev','watch','js_concat']);

gulp.task('prod', ['compile_prod','js_concat','js_uglify']);