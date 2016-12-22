/*!
 * node-sass: lib/binding.js
 */

var errors = require('./errors');

/**
 * Require binding
 */
module.exports = function(ext) {
  if (ext.hasBinary(ext.getBinaryPath())) {
    return require(ext.getBinaryPath());
  }

  return require('bindings')('binding.node');
};
