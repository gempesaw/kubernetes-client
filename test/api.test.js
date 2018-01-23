'use strict';

const assume = require('assume');

const Api = require('../lib/api');
const Core = require('../lib/core');
const Extensions = require('../lib/extensions');
const Autoscaling = require('../lib/autoscaling');

describe('lib.api', () => {
  describe('Api', () => {
    it('returns Core', () => {
      const api = new Api({});
      assume(api.group('v1').constructor).equals(Core);
      assume(api.group({ apiVersion: 'v1' }).constructor).equals(Core);
    });
    it('returns Extensions', () => {
      const api = new Api({});
      const result = api.group('extensions/v1beta1');
      assume(result.constructor).equals(Extensions);
      assume(result.version).equals('v1beta1');
    });
    it('returns Autoscaling', () => {
      const api = new Api({});
      const result = api.group('autoscaling/v1');
      assume(result.constructor).equals(Autoscaling);
      assume(result.version).equals('v1');
    });
  });
});
