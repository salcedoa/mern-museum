const { MongoClient } = require('mongodb');
require("dotenv").config({ path: "./config.env" });
let db;

// connect - called once in server.js;
async function connect() {
  const client = new MongoClient(process.env.ATLAS_URI);
  try {
    await client.connect();
    db = client.db("museum");
    console.log(`Connected to ${db.databaseName}`);

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

// return the db object
function getDb() {
  return db;
};

module.exports = {
  connect,
  getDb,
};