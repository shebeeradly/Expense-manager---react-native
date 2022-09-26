const config = require("./package.json").projectConfig;

module.exports = {
    mongoConfig: {
        connectionUrl: config.mongoConnectionUrl,
        database: "expense_db",
        collections: {
            USERS: "users",
        },
    },
    serverConfig: {
        ip: config.serverIp,
        port: config.serverPort,
    },
    tokenSecret : "expense_secret",
};