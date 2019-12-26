const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/Mongo', {useNewUrlParser: true});
mongoose.connection.on('error', console.error);

module.exports = {
    mongoose
}