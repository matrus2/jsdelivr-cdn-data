'use strict';

var semver = require('semver');

var data = module.exports = {};

var cdnjs = require('./external/jsdelivr.json').packages;

cdnjs.forEach(function (item) {
  data[item.name] = {
    versions: item.versions.filter(function (version) {
      return semver.valid(version);
    }),
    url: function (version) {
      return ['//cdn.jsdelivr.net', item.name, version,
        item.mainfile].join('/');
    }
  };
});