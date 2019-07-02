const mongoose = require('mongoose');
const URI = 'mongodb://localhost/criterios-re';

mongoose.connect(URI, {useNewUrlParser: true })
        .then(db => console.log('Db está conectaa'))
        .catch(err => console.error(err));


module.exports = mongoose;