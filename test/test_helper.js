const mongoose = require('mongoose');

mongoose.connect('mongodb://lochost/users_test')
mongoose.connection.once('open', () => {
    console.log('everything is working');
}).on('error', () => {
    console.warn('somthing happened')
})