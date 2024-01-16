const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongodb://127.0.0.1:27017/dreamCalendar_db');

module.exports = mongoose.connection;