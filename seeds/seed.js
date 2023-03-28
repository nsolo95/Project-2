const Seeds = require('seeds');

Seeds.define('users', {
    firstName: Seeds.firstName(),
    lastName: Seeds.lastName(),
    email: Seeds.email(),
    passwords: Seeds.passwords
    
  });