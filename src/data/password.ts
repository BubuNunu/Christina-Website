// Visitor password for the password screen (see PasswordGate), stored only as a
// PBKDF2-SHA256 hash. To change the password, run in a terminal:
//   node -e "console.log(require('crypto').pbkdf2Sync('NEW PASSWORD', '<passwordSalt>', <passwordIterations>, 32, 'sha256').toString('hex'))"
// and paste the result into passwordHash. Set passwordHash to '' to turn the screen off.
export const passwordSalt = 'c852027d7d103282aa6d112b1303af76';
export const passwordIterations = 310000;
export const passwordHash = '6deb34261d2d7b978992d6a7875754b1840470d8f61b3cc17ad5d471b810eb4a';
