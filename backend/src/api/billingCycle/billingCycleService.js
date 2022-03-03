const BillingCycle = require('./billingCycle');
const errorHandler = require('../common/errorHandler')
    //serviços webserver rest no noderestfull

BillingCycle.methods(['get', 'put', 'post', 'delete']);
// por padrao o 'put' nao tem as validacoes q passamos e nao atualiza o ultimo dado,
// com isso abaixo estamos permitindo
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.status(500).json({ erros: [error] })
        }
    }).skip(req.query.skip).limit(req.query.limit)
})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({
                errors: [error]
            })
        } else {
            res.json({ value })
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
        $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
    }, {
        $project: { _id: 0, credit: 1, debt: 1 }
    }], (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle