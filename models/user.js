const mongoose = require(mongoose);

// Creating UserSchema
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Provide your name"],
        },
        userName: {
            type: String,
            required: true,
            maxLength: 20,
        },
        password: {
            type: String,
            required: true,
            maxLength: 16,
        },
        location: {
            type: String,
            required: [true, "Provide your location"],
        },
        url: {
            type: String,
        },
        discordId: {
            type: String,
        },
        favoriteGames: [{mongoose.Schema.Types.ObjectId, ref:"Game"}],
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model("User", userSchema);

module.exports = {
    User,
} 