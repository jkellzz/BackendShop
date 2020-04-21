const item = require('../model/itemModel')
const itemData = require('./seed.json')
const mongoose = require('./connection')

item.deleteMany({}).then(() => {
    item.collection.insertMany(itemData).then(items => {
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})