const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const dreamSchema = new Schema(
    {
        dreamName: {
            type: String,
            required: true,
            unique: true
        },
        dreamText: {
            type: String,
            required: true, 
            unique: true
        },
    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);

dreamSchema.virtual('dreamName').get(function () {
    return this.dreamName;
});

const Dream = model('Dream' , dreamSchema);

module.exports = Dream;