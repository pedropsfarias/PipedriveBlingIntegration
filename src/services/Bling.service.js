const config = require('../config');
const fetch = require('node-fetch');
const js2xmlparser = require("js2xmlparser");

class BlingService {

    _apiToken = '';
    _baseUrl = '';

    constructor() {

        if (!config.bling.token) throw ('Bling API Token is not configured')
        if (!config.bling.baseUrl) throw ('Bling base URL is not configured')

        this._apiToken = config.bling.token;
        this._baseUrl = config.bling.baseUrl;

    }

    postOrder(order) {

        let xml = js2xmlparser.parse("pedido", order);
        let url = `${this._baseUrl}/pedido/json`;
        let orderPromisse = new Promise((resolve, reject) => {

            let body = `apikey=${this._apiToken}&xml=${xml.split("\n").slice(1).join("\n")}`

            fetch(url, {
                method: 'post',
                body: body,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            })
                .then(res => res.json())
                .then(data => {

                    if (data.erros) {

                        reject({ success: false, error: data.erros.split(',') });

                    } else {

                        resolve(data);

                    }

                }).catch(error => {

                    reject({ success: false, error: error });

                });

        });

        return orderPromisse;
    }

    postOrders(orders){

        let ordersPromisse = new Promise((resolve, reject) => {

            let promises = [];

            for (let i = 0; i < orders.length; i++) {
                
                const order = orders[i];
                promises.push(this.postOrder(order));
                
            }

            Promise.all(promises)
            .then(values => resolve(values))
            .catch(err => reject(err));


        });

        return ordersPromisse;
        
    }
}

module.exports = BlingService;