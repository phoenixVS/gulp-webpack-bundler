const gulp = require('gulp');
const views = require('./views');
const styles = require('./styles');
const scripts = require('./scripts');
const fonts = require('./fonts');
const images = require('./images');

const config = require('../config');

function watch(cb) {
  gulp.watch(config.html.dev + '*.ejs', views);
  gulp.watch(config.css.dev + '*.scss', styles);
  gulp.watch([config.js.dev + '*.js', config.js.dev + '*.ts'], scripts);
  gulp.watch(config.images.dev.all + '**', images);
  gulp.watch(config.fonts.dev, fonts);
  cb();
}

module.exports = watch;