const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    duration: [{
        type: String,
    }],
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);