require('dotenv').config();

const config = {
    PORT: process.env.PORT || 3001,
    DB_NAME: process.env.DB_NAME || '',
    DB_HOSTNAME: process.env.DB_HOSTNAME || '',
    DB_PORT: process.env.PORT || '',
    DB_USERNAME: process.env.DB_USERNAME || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
};
object.freeze(config);
module.exports = config
