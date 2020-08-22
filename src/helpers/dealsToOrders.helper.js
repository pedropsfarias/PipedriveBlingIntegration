const Order = require('../models/Order.model');

let dealsToOrders = (deals) => {

    let orders = [];

    for (let i = 0; i < deals.length; i++) {
        
        const deal = deals[i];
        let order = new Order();

        order.cliente.nome = deal.creator;
        order.itens[0].descricao = deal.title;
        order.itens[0].codigo = deal.value;
        order.itens[0].vlr_unit = deal.title;
        
        orders.push(order);
        
    }
    
    return orders;

}

module.exports = dealsToOrders;