const db = require('../db/index.js');

module.exports = {
  get: callback => {
    let queryStr = `SELECT * FROM savedpassages`;
    db.query(queryStr, (err, result) => {
      if (err) {
        console.log('Failed to get pasages');
      } else {
        callback(null, result);
      }
    })
  },
  add: (newPass, callback) => {
    let queryStr = `INSERT INTO savedpassages (passage) VALUES ('${newPass}')`;
    db.query(queryStr, (err, result) => {
      if (err) {
        console.log('Failed to save passage');
      } else {
        callback(null, result);
      }
    })
  },
}