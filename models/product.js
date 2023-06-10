const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true,
    },

    featured:{
        type:Boolean,
        default:false
    },

    shipping:{
        type:Boolean,
        default:false
    },


    colors: {
        type: [String],
        required: true
    },

    image: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                try {
                    const url = new URL(value);
                    return url.protocol === 'http:' || url.protocol === 'https:';
                } catch (error) {
                    return false;
                }
            },
            message: 'Invalid image URL'
        }
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    rating:{
        type:Number,
        default:4.9,
    },

    createdAt:{
        type:Date,
        default:Date.now(),
    },

    company:{
        type:String,
        enum:{
            values : [ "apple", "samsung", "dell", "hp", "rolex", "lenova", "asus", "nokia" ],
            message: `{VALUES} is not supported`, 
        }
    }
})


module.exports = mongoose.model('Product', productSchema);