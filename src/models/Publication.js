const {Schema, model} = require('mongoose')

const PublicationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = model('Publication', PublicationSchema)