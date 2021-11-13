/**
 * working with Hashes for the login page of Spider
 * going use the node js hash functions
 */

const { createHash } = require('crypto');

function hash(input) {
  // set the alg -> git it info -> get output
  return createHash('sha256').update(input).digest('hex'); 
}

let password = 'hi-mom!';
const hash1 = hash(password);
console.log(hash1)

// incorrect password 
let passwordAttempt = 'hi-mom';
// correct password 
let correctPass = 'hi-mom!';

// incorrect hash 
const hash2 = hash(passwordAttempt);
// correct hash
const hash3 = hash(correctPass);

// testing if they match
const match = hash1 === hash2;
const match2 = hash1 === hash3;

console.log(match ? 'correct' : "password doesn't match"); // fail
console.log(match2 ? 'correct' : "password doesn't match"); // correct 
