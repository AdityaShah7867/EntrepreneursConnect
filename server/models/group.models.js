const mongoose = require('mongoose');
const User = require('../models/user.models')

// Define the Group schema
const groupSchema = new mongoose.Schema({
    groupname: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    members: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    discussions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Discussion',
        },
    ],
});


// Group disscusion model
const discussionSchema = new mongoose.Schema({
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the Group model
const Group = mongoose.model('Group', groupSchema);

const GroupDiscussion = mongoose.model('Discussion', discussionSchema);


module.exports = {
    Group,
    GroupDiscussion
};
