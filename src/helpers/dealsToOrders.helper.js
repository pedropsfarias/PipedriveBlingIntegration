const Order = require('../models/Order.model');

let dealsToOrders = (deals) => {

    let orders = [];

    for (let i = 0; i < deals.length; i++) {
        
        const deal = deals[i];
        let order = new Order();

        order.client.name = '';
        
        orders.push(order);
        
    }
    
    return orders;

}

module.exports = DealsToOrders;