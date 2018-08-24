const dbConnection = require("../database/db_connect");

module.exports = topicId =>
  new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT board_id FROM topics WHERE id=$1`,
      [topicId],
      (err, res) => {
        if (err || res.rowCount === 0) reject(err);
        return resolve(res);
      }
    );
  });
