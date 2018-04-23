'use strict';

const winston = require('winston');

const logger = module.exports = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'log.log', level: 'verbose' }),
        new winston.transports.Console({ format: `${info.level}: ${info.message} JSON.stringify({ ...rest }) `, level: 'info' }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

logger.INFO = 'info';
logger.ERROR = 'error';
logger.VERBOSE = 'verbose';
