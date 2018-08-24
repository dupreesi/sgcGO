const dbConnection = require("../database/db_connect");

module.exports = id =>
  new Promise((resolve, reject) => {
    dbConnection.query(
      `DELETE FROM topics WHERE id=$1 RETURNING board_id`,
      [id],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
