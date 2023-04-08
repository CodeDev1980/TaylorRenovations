const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectPostSchema = new Schema ({
    title: String,
    body: String,
    image: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date
    }
})

const ProjectPost = mongoose.model('ProjectPost', ProjectPostSchema)
module.exports = ProjectPost