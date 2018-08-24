const removeTopic = require("../queries/remove_topic");
const getBoardId = require("../queries/get_board_id");

module.exports = (req, res, next) => {
  const { id } = req.params;
  let board;
  getBoardId(id)
    .then(boardId => {
      board = boardId.rows[0].board_id;
      return removeTopic(id)
        .then(result => res.redirect(`/board/${board}`))
        .catch(err => next(err));
    })
    .catch(err => next(new Error("topic doesn't exist")));
};
