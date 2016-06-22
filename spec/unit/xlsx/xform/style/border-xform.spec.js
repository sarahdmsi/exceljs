'use strict';

var BorderXform = require('../../../../../lib/xlsx/xform/style/border-xform');
var testXformHelper = require('./../test-xform-helper');

var expectations = [
  {
    title: 'Empty',
    create:  function() { return new BorderXform()},
    preparedModel: {},
    xml: '<border><left/><right/><top/><bottom/><diagonal/></border>',
    get parsedModel() { return this.preparedModel; },
    tests: ['write', 'parse']
  },
  {
    title: 'Thin Red Box',
    create:  function() { return new BorderXform()},
    preparedModel: {
      left: { color: {argb:'FFFF0000'}, style: 'thin' },
      right: { color: {argb:'FFFF0000'}, style: 'thin' },
      top: { color: {argb:'FFFF0000'}, style: 'thin' },
      bottom: { color: {argb:'FFFF0000'}, style: 'thin' }
    },
    xml: '<border><left style="thin"><color rgb="FFFF0000"/></left><right style="thin"><color rgb="FFFF0000"/></right><top style="thin"><color rgb="FFFF0000"/></top><bottom style="thin"><color rgb="FFFF0000"/></bottom><diagonal/></border>',
    get parsedModel() { return this.preparedModel; },
    tests: ['write', 'parse']
  },
  {
    title: 'Dotted colourless Box',
    create:  function() { return new BorderXform()},
    preparedModel: {
      left: { style: 'dotted' },
      right: { style: 'dotted' },
      top: { style: 'dotted' },
      bottom: { style: 'dotted' }
    },
    xml: '<border><left style="dotted"/><right style="dotted"/><top style="dotted"/><bottom style="dotted"/><diagonal/></border>',
    get parsedModel() { return this.preparedModel; },
    tests: ['write', 'parse']
  },
  {
    title: 'Cross',
    create:  function() { return new BorderXform()},
    preparedModel: {diagonal: {style: 'thin', up: true, down: true}},
    xml: '<border diagonalUp="1" diagonalDown="1"><left/><right/><top/><bottom/><diagonal style="thin"/></border>',
    get parsedModel() { return this.preparedModel; },
    tests: ['write', 'parse']
  }
];

describe('BorderXform', function () {
  testXformHelper(expectations);
});
