// Configuration settings
const

    _app = 'trolly', // name on the library
    minified = 'trolly.min.js', // name on the production file
    dev = 'trolly.js', // name on the development file

    /**
     * Paths
     */
    _root = __dirname + '../../',
    distDir = _root + 'dist',
    sourceDir = _root + 'src',
    testDir = _root + 'tests',
    setupDir = _root + 'tests/setup/node.js',
    karmaConf = _root + 'config/karma.conf.js';

module.exports = {
    _app,
    minified,
    dev,
    distDir,
    sourceDir,
    testDir,
    setupDir,
    karmaConf
};