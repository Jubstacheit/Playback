import bcrypt from 'bcryptjs';

const saltRounds = 12;
bcrypt.genSalt(saltRounds, (err, salt) => {
	if (err) {
		console.log(err);
		return;
	}
});

const userPassword = 'password123';
bcrypt.hash(userPassword, salt, (err, hash) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(`Hashed password: ${hash}`);
});

const storedHashedPassword = 'hashed'
const userInputPassword = 'password123'
bcrypt.compare(userInputPassword, storedHashedPassword, (err, result) => {
	if (err) {
		console.log(err);
		return;
	}

	if (result) {
		console.log('Password match');
	} else {
		console.log('Password does not match');
	}
});

export {
	bcrypt
};