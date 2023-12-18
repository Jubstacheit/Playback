const Game = require("../models/Game");
const bcrypt = require("bcrypt");

class GameService {
	async create(game) {
		try {
			const newGame = await Game.create(game);
			return newGame;
		} catch (err) {
			throw err;
		}
	}
}

module.exports = new GameService();
