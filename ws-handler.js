const uuid = require('uuid').v4
let CLIENTS=[],
ROOMS=[];
function handleConnection(socket) {
    socket.id = uuid()
    CLIENTS.push(socket.id)
    console.log(CLIENTS)

    // Enter websocket event listeners here


    socket.on("close",() => {
        CLIENTS.pop(socket.id)
        console.log(CLIENTS)
    })
}
module.exports = handleConnection