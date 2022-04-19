const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //evitar uns erros

const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb//localhost/mymoney'
module.exports = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Error.messages.general.required = "O atributto '{PATH}' é obrigatorio"