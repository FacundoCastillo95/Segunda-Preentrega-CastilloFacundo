const Chat = require('../models/chat');
const MongoCRUD = require('../repository/crud');

class ChatController extends MongoCRUD {

    constructor() {
        super(Chat);
    }
}

module.exports = new ChatController();