const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //evitar uns erros
mongoose.exports = mongoose.connect('mongodb://localhost/mymoney');