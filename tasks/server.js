const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const config = require('../config');

function server(cb) {
    browserSync.init({
        server: config.root.dist
    });
    browserSync.watch(config.root.dist + '/**/*.*', browserSync.reload);
    cb();
}

module.exports = server;