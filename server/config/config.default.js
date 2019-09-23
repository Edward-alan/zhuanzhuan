/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1568625981790_3853";

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',

        multipart: {
            mode: "file"
        },
        security: {
            csrf: false
        },

        // config/config.${env}.js
        mysql: {
            // database configuration
            client: {
                host: "localhost",
                port: "3306",
                user: "root",
                password: "123321",
                database: "koa_db"
            },
            // load into app, default true
            app: true,
            // load into agent, default false
            agent: false
        }
    };

    return {
        ...config,
        ...userConfig
    };
};
