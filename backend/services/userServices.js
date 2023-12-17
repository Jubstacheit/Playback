const User = require("../models/User");
const bcrypt = require("bcrypt");

class UserService {
	getAll() {
		return User.find({}, '-password');
	}
	checkPassword(email, password) {
		const user = User.findOne({ email });
		if (!user) {
			return false;
		}
		const bool = bcrypt.compare(password, user.password);
		if (!bool) {
			return false;
		}
		return user._id;
	}
}

module.exports = new UserService();
