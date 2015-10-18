var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    del = require('del');

gulp.task('build:sass', function() {
  return gulp.src('sass/main.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build:js', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build', ['build:sass', 'build:js']);

gulp.task('watch', function() {
  // Watch sass files
  gulp.watch('sass/*.scss', ['build:sass']);

  // Watch .js files
  gulp.watch('js/*.js', ['build:js']);
});
