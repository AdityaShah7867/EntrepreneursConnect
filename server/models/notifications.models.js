
const mongoose = require('mongoose')


const notificationSchema = new mongoose.Schema({
    sender: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        user: {
            type: Object,
            required: true,
        },
    },
    receiver: String,
    content: String,
    read: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now },
});

const Notification = mongoose.model('Notification', notificationSchema)

module.exports = Notification;