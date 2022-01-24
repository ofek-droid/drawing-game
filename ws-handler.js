const room = require('./modules/room')
const uuid = require("uuid").v4
let CLIENTS={},
ROOMS= {}; // {'client_id:Socket'}
function handleConnection(socket) {


    socket.id = uuid()
    socket.roomId = -1
    // console.log(CLIENTS)

    // Enter websocket event listeners here
    socket.on("client::init",(newName) => {
        socket.name = newName
        CLIENTS[socket.id] = socket

    })


    socket.on("room::create",() => {
        let newRoom = room(socket.id)
        socket.roomId = room.roomId
        ROOMS[newRoom.roomId] = newRoom
    })


    socket.on("room::join",(newRoomId) => {
        socket.roomId = newRoomId
        ROOMS[roomId].clients.push(socket)
    })


    socket.on("room::start",() => {
        console.log("Game started");
    })


    socket.on("room::delete",() => {
        const room = ROOMS[socket.roomId]
        if (socket.id === room.ownershipId){
            room.clients.map(client => {
                client.send("room::close")
            })
        }
    })


    socket.on("room::close",() => {
        delete socket.roomId
    })


    socket.on("close",() => {
        delete CLIENTS[socket.id]
        console.log(CLIENTS)
    })
}


module.exports = handleConnection