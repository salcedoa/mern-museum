const express = require("express");
const dbo = require("../connect");
const eventRoutes = express.Router();
// for converting id from string to ObjectId
const { ObjectId } = require("mongodb");

// getting a list of events from mongodb
eventRoutes.route("/")
  .get((req, res) => {
    // FOR NEW EVENTS ONLY: .find(end_date: { $gt: new Date() })
    let dbConnect = dbo.getDb()
    dbConnect
      .collection("events").find({})
      // the documents in the cursor returned are provided in json format
      .toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

// getting a single event by id
eventRoutes.route("/:id")
  .get((req, res) => {
    let dbConnect = dbo.getDb()
    let query = {_id: ObjectId(req.params.id)} // mongodb query
    dbConnect
      .collection("events")
      .findOne(query, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
  });


module.exports = eventRoutes;