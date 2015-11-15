/* eslint-disable */
import config from './config';
import chai from 'chai';
import sinon from 'sinon';

require('babel-core/register');

global.chai = chai;
global.sinon = sinon;
global.expect = global.chai.expect;

/* Library name */

global.trolly = require(config.sourceDir);


/*
	If your library uses features of the DOM,
	for example if writing a jQuery extension, you can add 'jsDOM' to the `devDependencies` of 
	your package.json and modify the settings here.
*/