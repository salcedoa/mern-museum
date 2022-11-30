const { MongoClient } = require('mongodb');
require("dotenv").config({ path: "./config.env" });

//connect();
async function connect() {
  const client = new MongoClient(process.env.ATLAS_URI);
  try {
    await client.connect();
    const db = client.db("museum");
    console.log(`Connected to ${db.databaseName}`);
    // returns the db object
    return db;

    /* 
    const events = db.collection("events");
    const searchCursor = await events.find();
    while (await searchCursor.hasNext()) {
      console.log(await searchCursor.next());
    } 
    */

  } catch (e) {
    console.log(e);
  }
}

module.exports.connect = connect;