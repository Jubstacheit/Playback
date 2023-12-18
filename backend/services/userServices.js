const User = require("../models/User");
const bcrypt = require("bcrypt");

class UserService {
	getAll() {
		return User.find({}, '-password');
	}
	create(data) {
		const user = new User(data);
		return user.save();
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
