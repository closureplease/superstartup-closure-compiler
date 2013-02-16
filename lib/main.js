

var compiler = {};

// really dump and dangerous
var rootPath = 'node_modules/superstartup-closure-compiler/',
    compPath = 'build/compiler.jar',
    sscompPath = 'build/sscompiler.jar';

/**
 * Full path and filename to vanilla compiler.
 * @return {string} The full path.
 */
compiler.getPath = function() {
  return rootPath + compPath;
};


/**
 * Full path and filename to superstartup compiler.
 * @return {string} The full path.
 */
compiler.getPathSS = function() {
  return rootPath + sscompPath;
};


module.exports = compiler;