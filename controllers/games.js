const db = require("../models");

const idx = (req, res) => {
    db.Game.find({}, function (err, allGames) {
        if (err) return res.send(err);
        const context = { games: allGames };
        return res.render("games/index", context);
    });
};

const show = (req, res) => {
    db.Game.findById(req.params.id, function (err, foundGame) {
        if (err) return res.send(err);
        const context = { game: foundGame };
        return res.render("game/show", context);
    });
};

const newGame = (req, res) => {
    res.render("games/new");
};

const create = (req, res) => {
    db.Game.create(req.body, function (err, createdGame) {
        if (err) return res.send(err);
        return res.redirect("/games");
    });
};

const edit = (req, res) => {
    db.Game.findById(req.params.id, (err, foundGame) => {
        if (err) return res.send(err);
        const context = { game: foundGame };
        return res.render("games/edit", context);
    });
};

const update = (req, res) => {
    db.Game.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        { new: true },
        (err, updatedGame) => {
            if(err) return res.send(err);
            return res.redirect(`/games/${updatedGame._id}`);
        }
    );
};

const destroy = (req, res) => {
    db.Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
        if (err) return res.send(err);
        return res.redirect("/games");
    });
};

module.exports = {
    idx,
    show,
    newGame,
    create,
    edit,
    update,
    destroy,
}