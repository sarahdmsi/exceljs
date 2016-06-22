'use strict';

var UnderlineXform = require('../../../../../lib/xlsx/xform/style/underline-xform');
var testXformHelper = require('./../test-xform-helper');

var expectations = [
  {
    title: 'single',
    create:  function() { return new UnderlineXform()},
    preparedModel: true,
    get parsedModel() { return this.preparedModel; },
    xml: '<u/>',
    tests: ['write', 'parse']
  },
  {
    title: 'double',
    create:  function() { return new UnderlineXform()},
    preparedModel: 'double',
    get parsedModel() { return this.preparedModel; },
    xml: '<u val="double"/>',
    tests: ['write', 'parse']
  },
  {
    title: 'false',
    create:  function() { return new UnderlineXform()},
    preparedModel: false,
    get parsedModel() { return this.preparedModel; },
    xml: '',
    tests: ['write']
  }
];

describe('UnderlineXform', function () {
  testXformHelper(expectations);
});
