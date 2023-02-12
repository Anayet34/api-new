const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values:["apple", "samsung", "dell", "mi"],
            message: `{value} is not supported ` ,
        },
    },
});

module.exports = mongoose.model("Product", productSchema);