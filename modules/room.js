const Room = require("./room.json")
const uuid = require("uuid").v4
function room(ownerId){
    let newRoom = Room
    newRoom.ownershipId = ownerId
    newRoom.roomId = uuid()
    return newRoom
}

module.exports = room