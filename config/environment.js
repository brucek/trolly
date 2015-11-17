/* eslint-disable */
import dotenv from 'dotenv';
import path from 'path';
import {
    any, defaults
}
from 'lodash';

dotenv.load({
    silent: false,
    path: path.resolve(__dirname, '../.env')
});

const {
    ENVIRONMENT,
    HOT_RELOAD,
    NODE_ENV,
    HOST,
    PORT,
    WEBPACK_DEV_SERVER_PORT
} = defaults(process.env, {
        ENVIRONMENT: 'local',
        HOST: 'localhost',
        PORT: '8000',
        WEBPACK_DEV_SERVER_PORT: '8081'
    }),
    IS_PROD = any([
        NODE_ENV === 'production',
        ENVIRONMENT === 'stage',
        ENVIRONMENT === 'staging',
        ENVIRONMENT === 'prod',
        ENVIRONMENT === 'production'
    ]),
    IS_DEV = !IS_PROD,
    ENVIRONMENT_NAME = IS_PROD ? 'production' : 'development';

process.env.NODE_ENV = IS_PROD ? 'production' : 'development';

export default {
    IS_PROD,
    IS_DEV,
    ENVIRONMENT_NAME,
    HOST,
    PORT,
    WEBPACK_DEV_SERVER_PORT,
    WEBPACK_DEV_BASE,
    HOT_RELOAD
};
/* eslint-enable */