const config = require('../config');
const fetch = require('node-fetch');

class PipedriveService {

    _apiToken = '';
    _baseUrl = '';

    constructor() { 

        if(!config.pipedrive.token) throw('Pipedrive API Token is not configured')
        if(!config.pipedrive.baseUrl) throw('Pipedrive base URL is not configured')

        this._apiToken = config.pipedrive.token;
        this._baseUrl = config.pipedrive.baseUrl;

    }

    getDeals(status = 'won', limit = 100) {

        let url = `${this._baseUrl}/deals?status=${status}&start=0&limit=${limit}&api_token=${this._apiToken}`;
        let dealsPromisse = new Promise((resolve, reject) => {

            fetch(url)
                .then(response => response.json())
                .then(data => {

                    if (data.success) {

                        resolve(data);

                    } else {

                        reject({ success: false, error: `Not able to access: "${url}"` });

                    }

                }).catch(error => {

                    reject({ success: false, error: error });

                });

        })

        return dealsPromisse;

    }

}

module.exports = PipedriveService;