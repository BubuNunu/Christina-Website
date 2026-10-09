// Visitor password for the password screen (see PasswordGate), stored only as a
// PBKDF2-SHA256 hash. To change the password, run in a terminal:
//   node -e "console.log(require('crypto').pbkdf2Sync('NEW PASSWORD', '<passwordSalt>', <passwordIterations>, 32, 'sha256').toString('hex'))"
// and paste the result into passwordHash. Set passwordHash to '' to turn the screen off.
export const passwordSalt = 'a7ea45bec5fa3023138fd02c9d682946';
export const passwordIterations = 310000;
export const passwordHash = '6a726cdc9a49be950650e444afe890137b1def7bfef79abd2ffebc047492ad66';

