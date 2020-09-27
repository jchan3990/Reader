const model = require('./model.js');

module.exports = {
  get: (req, res) => {
    model.get((err, result, field) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(201).send(result);
      }
    })
  },
  add: (req, res) => {
    console.log(req);
    model.add(req.body.pId, req.body.pStart, req.body.pEnd, (err, result, field) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },
}