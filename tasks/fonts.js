const gulp = require('gulp');
const gulpFont = require('gulp-font');

const config = require('../config');

function fonts(cb) {
  gulp.src('src/assets/fonts/**/*.{ttf,otf}', { read: false })
    .pipe(gulpFont({
      ext: '.css',
      fontface: 'src/assets/fonts',
      relative: '/assets/fonts',
      dest: 'dist/assets/fonts',
      embed: ['woff'],
      collate: false
    }))
    .pipe(gulp.dest('dist/assets/fonts'));
  cb();
}

module.exports = fonts;