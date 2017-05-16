/*-----------------------------------------------------------
 GULP : SASS Task
-----------------------------------------------------------*/
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');
    spritesmith = require('gulp.spritesmith');

gulp.task('sass', function () {
    gulp.src(['./app/scss/master.scss'])
        .pipe(sass({includePaths: ['scss']}))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('./app/css'))
        .pipe(concat('master.css'))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('sprite', function () {
  var sprite = gulp.src('./app/images/sprite/*.png').pipe(spritesmith({
    imgPath: '../images/sprite.png',
    imgName: 'sprite.png',
    cssName: 'sprite.scss'
  }));
  sprite.img.pipe(gulp.dest('./app/images'));
  sprite.css.pipe(gulp.dest('./app/scss'));
});
