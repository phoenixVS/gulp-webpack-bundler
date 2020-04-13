const del = require('del');

const config = require('../config');

function clean(cb) {
  del(config.root.dist + '/**/*');
  cb();
}

module.exports = clean;