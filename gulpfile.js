var gulp = require('gulp'),
	connect = require('gulp-connect'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	uglify = require('gulp-uglify');

gulp.task('connect', function () {
	connect.server({
		port: 1337,
		livereload: true,
		root: './dist'
	});
});

gulp.task('jade', function () {
	gulp.src('jade/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

gulp.task('stylus', function () {
	gulp.src('stylus/*.styl')
		.pipe(stylus({set: ['compress']}))
		.pipe(gulp.dest('dist/css'))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch('jade/*.jade', ['jade']);
	gulp.watch('stylus/*.styl', ['stylus']);
	gulp.watch('js/*.js', ['js']);
});

gulp.task('default', ['jade', 'stylus', 'js', 'connect', 'watch']);