const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const log = require('fancy-log');

const config = require('../config');

function views(cb) {
  gulp.src("./src/views/**/*.ejs")
    .pipe(ejs({ title: 'gulp-ejs' }).on('error', log))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./dist'));
  cb();
}

module.exports = views;