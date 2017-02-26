const gulp 			      = require('gulp'),
    	sass   			    = require('gulp-sass'),
    	autoprefixer	  = require('gulp-autoprefixer'),
      browserSync     = require('browser-sync').create();

/* Server */
gulp.task('default',['css'], function() {
	browserSync.init({
		server: './'
	});
	gulp.watch('./scss/**/*.scss', ['css']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/*.js').on('change', browserSync.reload);
});

/* CSS */
gulp.task('css', function() {
    gulp.src("./scss/*.scss")
        .pipe(sass({
          outputStyle: 'expanded'
        }))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});