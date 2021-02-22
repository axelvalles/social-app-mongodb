const {Schema, model} = require('mongoose')
const bcript = require('bcryptjs')

const UserSchema = new Schema({
    name:{
        first:{
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    passrword:{
        type: String,
        required: true
    },
    friends:{
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

UserSchema.methods.encryptPassword = async pass => {
    const salt = await bcript.genSalt(10)
    return await bcript.hash(pass, salt)
}

UserSchema.methods.matchPassword = async function (pass){
    return await bcript.compare(this.passrword, pass)
} 

module.exports = model('User', UserSchema)