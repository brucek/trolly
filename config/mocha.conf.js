/* eslint-disable */
global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));

/* Library name */

global.trolly = require(config.sourceDir);

/*
	If your library uses features of the DOM,
	for example if writing a jQuery extension, you can add 'jsDOM' to the `devDependencies` of 
	your package.json and modify the settings here.
*/