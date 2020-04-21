const Item = require('../model/itemModel')
const itemData = require('./seed.json')
const mongoose = require('./connection')

Item.deleteMany({}).then(() => {
    Item.collection.insertMany(itemData).then(items => {
        console.log(itemData)
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})