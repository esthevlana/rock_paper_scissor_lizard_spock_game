const connectedUsers = {};
const choices = {};

const moves = {
    "scissor": "paper",
    "paper": "rock",
    "rock": "lizard",
    "lizard": "spock",
    "spock": "scissor",
    "scissor": "lizard",
    "lizard": "paper",
    "paper": "spock",
    "spock": "rock",
    "rock": "scissor"
};

const initializeChoices = (roomId) => {
    choices[roomId] = ["", ""]
}

const userConnected = (userId) => {
    connectedUsers[userId] = true;
}

const makeMove = (roomId, player, choice) => {
    if(choices[roomId]){
        choices[roomId][player - 1] = choice;
    }
}

module.exports = {connectedUsers, initializeChoices, userConnected, makeMove, moves, choices};