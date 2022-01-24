const Client = require('./client.json')
const uuid = require("uuid").v4
// Insert client functions here

function client(){
    let new_client = Client
    new_client.clientId = uuid()
    // new_client.name = name
    return new_client
}

module.exports = Client