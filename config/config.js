var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'expressdemo'
    },
    port: 3000,
    db: 'mongodb://localhost/expressdemo-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'expressdemo'
    },
    port: 3000,
    db: 'mongodb://localhost/expressdemo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'expressdemo'
    },
    port: 3000,
    db: 'mongodb://localhost/expressdemo-production'
  }
};

module.exports = config[env];
