const gulp = require('gulp');
const webpack = require('webpack');
const gulpWebpack = require('gulp-webpack');
const webpackConfig = require('../webpack.config.js');

const config = require('../config');

function scripts(cb) {
    gulp.src(config.js.dev)
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(config.js.dist));
    cb();
}

module.exports = scripts;