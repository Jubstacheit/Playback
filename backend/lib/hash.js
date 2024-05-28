import bcrypt from 'bcryptjs';

const createHash = async (password) => {
	const saltRounds = 12;
	try {
		const salt = await bcrypt.genSalt(saltRounds);
		const hash = await bcrypt.hash(password, salt);
		return hash;
	} catch (err) {
		console.log(err);
	}
};

const compareHash = async (input, hash) => {
	try {
		const result = await bcrypt.compare(input, hash);
		return result;
	} catch (err) {
		console.log(err);
	}
};

export {
	createHash,
	compareHash
};