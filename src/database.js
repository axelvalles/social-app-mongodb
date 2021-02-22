const mongoose = require('mongoose')

const MONGO_DB_URI = process.env.MONGO_DB_URI

mongoose.connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(db => console.log('base de datos conectada'))
.catch(e => console.log(e))