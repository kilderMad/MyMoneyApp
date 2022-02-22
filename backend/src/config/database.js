const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //evitar uns erros
module.exports = mongoose.connect('mongodb://localhost/mymoney');