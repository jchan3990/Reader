const db = require('../db/index.js');

module.exports = {
  get: callback => {
    let queryStr = `SELECT * FROM highlights`;
    db.query(queryStr, (err, result) => {
      if (err) {
        console.log('Failed to get pasages');
      } else {
        callback(null, result);
      }
    })
  },
  add: (passId, start, end, callback) => {
    let queryStr = `INSERT INTO highlights (pId, pStart, pEnd) VALUES (${passId}, ${start}, ${end})`;
    db.query(queryStr, (err, result) => {
      if (err) {
        console.log('Failed to save passage');
      } else {
        callback(null, result);
      }
    })
  },
}