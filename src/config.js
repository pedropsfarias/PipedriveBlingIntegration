require('dotenv').config()

module.exports = {
    pipedrive: {
        baseUrl: process.env.PIPEDRIVE_BASEURL,
        token: process.env.PIPEDRIVE_TOKEN
    },
    bling: {
        baseUrl: process.env.BLING_BASEURL,
        token: process.env.BLING_TOKEN
    }
};

