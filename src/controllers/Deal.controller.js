const Deal = require('./../models/Deal.model.js');
const PipedriveService = require('./../services/Pipedrive.service');
const BlingService = require('./../services/Bling.service');
const db = require('./../middlewares/Database.middleware');
const dealsToOrders = require('./../helpers/dealsToOrders.helper')

class DealControler {

    constructor() {

        this._pipedriveService = new PipedriveService();
        this._blingService = new BlingService();

    }

    migrateDeals() {

        let migratePromise = new Promise((resolve, reject) => {

            this._pipedriveService.getDeals().then(deals => {

                if (deals.data.length > 0) {

                    let orders = dealsToOrders(deals.data);
                    this._blingService.postOrders(orders)
                        .then(res => {

                            this.persistDeals(deals.data)
                                .then(res => resolve(res))
                                .catch(err => reject(err));


                        }).catch(err => reject(err));

                }

            }).catch(err => reject(err));

        });

        return migratePromise;

    }

    persistDeals(deals) {

        let persistPromise = new Promise((resolve, reject) => {

            let dealsPromises = [];

            for (let i = 0; i < deals.length; i++) {

                let deal = new Deal({
                    id: deals[i].id,
                    creator: deals[i].creator,
                    title: deals[i].title,
                    value: deals[i].value,
                    currency: deals[i].currency,
                    org: deals[i].org,
                    status: deals[i].status
                });

                dealsPromises.push(deal.save());

            }

            Promise.all(dealsPromises)
                .then(values => resolve(values))
                .catch(err => reject(err));

        });

        return persistPromise;

    }

    getDeals() {

        let dealsPromisse = new Promise((resolve, reject) => {

            const aggregate = Deal.aggregate([
                {
                    _id: { $dayOfYear: "$created_at" },
                    total: {
                        '$sum': '$value'
                    }
                }
            ], (err, deals) => {

                if (err) {

                    reject({ success: false });

                } else {

                    resolve(deals);

                }

            });

        });

        return dealsPromisse;

    }

}

module.exports = DealControler;
