const fs = require('fs');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const log = require('fancy-log');

const config = require('../config');

function images(cb) {
  gulp.src(config.images.dev.nomin + config.images.extensions)
    .pipe(gulp.dest(config.images.dist));
  gulp.src(config.images.dev.all + config.images.extensions)
    .pipe(gulp.dest(config.images.dist));
  let dirname = config.images.dev.min_folder;
  // Check if imagemin/ is no empty
  fs.readdir(dirname, function (err, files) {
    if (err) {
      // some sort of error
      log(err);
    } else {
      if (!files.length) {
        // directory appears to be empty
        log('No images to minify');
      }
      else {
        log(`folder is not empty`);
        gulp.src(config.images.dev.min + config.images.extensions)
          .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
              plugins: [
                { removeViewBox: true },
                { cleanupIDs: false }
              ]
            })
          ]))
          .pipe(gulp.dest(config.images.dist));
      }
    }
  });
  cb();
}

module.exports = images;