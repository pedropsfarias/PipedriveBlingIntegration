const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(`mongodb+srv://${config.db.user}:${config.db.password}@${config.db.baseUrl}/${config.db.database}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;