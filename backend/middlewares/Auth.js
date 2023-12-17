const UnauthorizedError = require("../errors/Unauthorized");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = (req, res, next) => {
	try {
		const token = req.headers["x-access-token"];
		if (!token) {
			throw "No token";
		}
		const decoded = jwt.verify(token, config.secretJwtToken);
		req.user = decoded;
		next();
	} catch (err) {
		next(new UnauthorizedError(err));
	}
};
