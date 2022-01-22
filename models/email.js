const mongoose = require('mongoose')

//Creating email schema for newsletter sign-up emails

const emailSchema = mongoose.Schema(
    {
        emailAddress: {
            type: String,
            required: true,
            match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Email", emailSchema);