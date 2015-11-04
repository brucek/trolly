/* eslint-disable */

process.env.NODE_ENV = 'test';

global.babel = require('babel-core/register')({ stage: 0 });
global.expect = require('chai').expect;
global.sinon = require('sinon');

global.BROWSER = false;