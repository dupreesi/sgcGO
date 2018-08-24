const createBoard = require("../queries/create_board");

module.exports = (req, res, next) => {
  createBoard()
    .then(id => {
      res.redirect(`/board/${id}`);
    })
    .catch(err => next(new Error("Error creating new board")));
};
