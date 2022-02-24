const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //evitar uns erros
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributto '{PATH}' é obrigatorio"