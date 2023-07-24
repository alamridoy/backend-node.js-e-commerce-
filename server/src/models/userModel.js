const {Schema,model} = require('mongoose')
const bcrypt = require('bcrypt')
const {defaultImagePath} = require('../secret')

// make schema
const userSchema = new Schema({
    name : {
        type: String,
        require: [true,'User name is required'],
        trim: true,
        maxlength:[30,'Name must be 30 characters'],
        minlength:[3,'Name must be 3 characters']
     },
     email: {
        type: String,
        required: [true, 'User email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            },
            message: 'Invalid email format'
        }
    },
    password : {
        type: String,
        require: [true,'User password is required'],
        minlength:[6,'Password must be 6 characters'],
        set : (userPassword) =>bcrypt.hashSync(userPassword, bcrypt.genSaltSync(10))
     }, 
     image : {
        type: String,
        default:defaultImagePath,
     },
     address : {
        type: String,
        require: [true,'User address is required'],
     },
     phone: {
        type: String,
        required: [true, 'User phone is required'],
        trim: true,
        validate: {
            validator: function(v) {
                return /^01\d{9}$/.test(v); //bd phn number regex 01xxxxxxxxx
            },
            message: 'Invalid phone number format'
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isBanned: {
            type: Boolean,
            default: false
        },

    }
    
},{timestamps: true});



// make model
const User = model('Users',userSchema);


module.exports = User;
