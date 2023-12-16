class UnauthorizedError extends Error {
	constructor(message = "Unauthorized access : You don't have the permission to access this resource") {
		super(message);
		this.name = 'UnauthorizedError';
		this.statusCode = 401;
	}
}

module.exports = UnauthorizedError;
