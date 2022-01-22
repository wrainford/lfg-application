const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        releaseDate: {type: String},
        genre: {type: String},
        rating: {type: String},
        userScore: {type: Number},
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Game", gameSchema);