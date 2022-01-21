const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        releaseDate: {type: Date},
        genre: {type: String},
        rating: {type: String},
        userScore: {type: Number},
    }
);

module.exports = mongoose.model("Game", gameSchema);