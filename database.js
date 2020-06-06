//Trying to connect Mongoose.

let mongoose = require('mongoose');
const server = '127.0.0.1:27017'; // REPLACED WITH DB SERVER
const database = 'dile';      // REPLACED WITH DB NAME

class Database {
  constructor() {
    this._connect()
  } 
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()