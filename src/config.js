require('dotenv').config()

module.exports = {
    pipedrive: {
        baseUrl: process.env.PIPEDRIVE_BASEURL,
        token: process.env.PIPEDRIVE_TOKEN
    },
    bling: {
        baseUrl: process.env.BLING_BASEURL,
        token: process.env.BLING_TOKEN
    },
    db:{
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
        baseUrl: process.env.DB_BASE_URL
    }
};

