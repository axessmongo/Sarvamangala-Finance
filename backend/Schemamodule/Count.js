const mongoose = require('mongoose');
const { Schema } = mongoose;

const CountSchema = new Schema({
    count:{
        type:Number,
        
    }
})

const Blog = mongoose.model('count', CountSchema);

module.exports = Blog