const gulp = require('gulp');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const config = require('../config');

function styles(cb) {
  gulp.src('./src/assets/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(config.css.dist));
  cb();
}

module.exports = styles;