const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role : {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

UserSchema.pre('save', async function(next) {
    if(this.isModified('password') || this.isNew){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
        //this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

UserSchema.plugin(AutoIncrement, {inc_field: 'id'});

UserSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    try {
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        if(user) {
            const auth = await bcrypt.compare(password, user.password);
    
            if(auth) {
                return user;
            }
            throw Error('incorrect password');
        }
        throw Error('incorrect email');

    } catch(error) {
        res.status(500).json({ error: error.message });
    }
    
};
const User = mongoose.model('users', UserSchema);
module.exports = User;