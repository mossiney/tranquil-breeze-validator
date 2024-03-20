# tranquil-breeze-validator

`tranquil-breeze-validator` is a comprehensive data validation library leveraging the strengths of `joi`, `validator`,
and `isemail` to provide a robust validation toolkit for your JavaScript applications. Whether you're validating email
addresses, passwords, or usernames, `tranquil-breeze-validator` offers an intuitive and easy-to-use interface for your
validation needs.

## Features

- Email validation using `isemail`
- Password validation with customizable rules using `joi`
- Username validation to ensure alphanumeric characters with `validator`

## Installation

To use `tranquil-breeze-validator` in your project, run:

```bash
npm install tranquil-breeze-validator
```

## Usage

### Validate Email

```javascript
const { validateEmail } = require('tranquil-breeze-validator');

console.log(validateEmail('example@example.com')); // true or false
```

### Validate Password

```javascript
const { validatePassword } = require('tranquil-breeze-validator');

console.log(validatePassword('yourSecurePassword123')); // Result object from Joi
```

### Validate Username

```javascript
const { validateUsername } = require('tranquil-breeze-validator');

console.log(validateUsername('user123')); // true or false
```

## Contributions

Contributions are welcome! Please feel free to submit a pull request or create an issue if you have suggestions or find
a bug.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
