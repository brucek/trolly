/* eslint-disable */
import config from './config';
import chai from 'chai';
import sinon from 'sinon';

require('babel-core/register');

global.chai = chai;
global.sinon = sinon;
global.expect = global.chai.expect;