const gulp = require('gulp');
require('dotenv').config();
const config = require('./config');
const clean = require('./tasks/clean');
const views = require('./tasks/views');
const styles = require('./tasks/styles');
const scripts = require('./tasks/scripts');
const fonts = require('./tasks/fonts');
const images = require('./tasks/images');
const watch = require('./tasks/watch');
const server = require('./tasks/server');

exports.default = gulp.series(
    clean,
    gulp.parallel(views, styles, scripts, fonts, images),
    gulp.parallel(watch, server)
);