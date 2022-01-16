const WebSocket = require("ws").WebSocketServer
const handleConnection = require("./ws-handler.js")

function websocketConnection (server) {
    const io = new WebSocket({
        server: server
    })
    io.on('connection', socket => handleConnection(socket))
}

module.exports = websocketConnection