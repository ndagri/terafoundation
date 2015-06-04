'use strict';

var _ = require('lodash');

module.exports = function(customConfig, logger) {

    var StatsD = require('node-statsd').StatsD;

    var config = {
        host: '127.0.0.1',
        mock: false
    };

    _.merge(config, customConfig);

    logger.info("Using statsd host: " + config.host);

    var client = new StatsD(config);

    return client;
}