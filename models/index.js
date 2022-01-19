const mongoose = require('mongoose');

const db = mongoose.connection;

const dbUrl = process.env.DATABASE_URL;


// MONGOOSE CONNECTION

mongoose.connect(dbUrl)
.then(() => {
    console.log(`MongoDB Atlas is connected successfully at ${db.host}:${db.port}!`)
}).catch((err) => {
    console.log(`MongoDB Failed! Error: ${err}.`)
})


module.exports = {
    User: require('./user'),
    Game: require("./game")
}