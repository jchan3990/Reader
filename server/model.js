const db = require('../db/index.js');

module.exports = {
  get: callback => {
    let queryStr = `SELECT * FROM highlights`;
    db.query(queryStr, (err, result) => {
      if (err) {
        console.log('Failed to get passages');
      } else {
        callback(null, result);
      }
    })
  },
  add: (currPage, passId, start, end, string, callback) => {
    let queryStr = `INSERT INTO highlights (currPage, pId, pStart, pEnd, pString) VALUES (${currPage}, ${passId}, ${start}, ${end}, '${string}')`;
    db.query(queryStr, (err, result) => {
      if (err) {
        console.log('Failed to save passage', err);
      } else {
        callback(null, result);
      }
    })
  },
}