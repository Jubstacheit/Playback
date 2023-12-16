const User = require("./users.model");
const bcrypt = require("bcrypt");

class UserService {
	getAll() {
		return User.find({}, '-password');
	}
}

module.exports = new UserService();
