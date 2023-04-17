const mongoose = require('mongoose')

const connectDatabase = () => {
    console.log('Wait connecting to the database')

    mongoose.connect("mongodb+srv://oseiasc2:j3qqlbCc4YFFqnAP@apopydb.e92lo9p.mongodb.net/?retryWrites=true&w=majority", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDb Atlas Connected'))
    .catch(err => console.log(err))
}

module.exports = connectDatabase