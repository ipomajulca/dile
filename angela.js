//This app starts a server and listens on port 3000 for connections
const express = require('express') //get express
const app = express() //our app    
const port = 3000 //port to use
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


//Endpoint to get list of stores
app.get('/items', (req, res) => { //req=request,res=response
  getListOfCollection('diledb', 'items') //call function to return list of stores
    .then((result) => res.status(200).json(result)) //response=200 is ok
    .catch((err) => res.status(500).send(err)); //response=500 there is an error
});

getListOfCollection = (dbName, collectionName) => { //db is database
  //get the url to connect to Mongodb
  const getDbUrl = require('./getDbUrl');

  return new Promise(function (resolve, reject) {
    var dbUrl = getDbUrl();
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(dbUrl, {
      useUnifiedTopology: true
    }, (err, client) => {
      if (err) return console.error(err)
      var dbo = client.db(dbName);
      dbo.collection(collectionName).find({}).toArray(function (err, result) {
        console.log(err);
        if (err) throw err;
        resolve(result);
        client.close();
      });
    });
  })
}