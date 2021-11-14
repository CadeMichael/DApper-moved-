const bcrypt = require('bcrypt');
const saltRounds =5;

let pass = "test";
let correct = "test";
let fail = "Test";

/** 
let hashPass = function (pw, salt) {
  bcrypt.hash(pw, salt, function(err, hash) {
    //console.log(hash);
    return hash;
  });
};

let compPass = function(newPass, hashedPass) {
  bcrypt.compare(newPass, hashedPass, function(err, result) {
    console.log(result);
    return (result == true);
  });
};

let hp = hashPass(pass, saltRounds);
console.log(hp);

compPass(correct, hp);
*/  
bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(pass, salt, function(err, hash) {
    // returns hash, this is where it get's put in db
    bcrypt.compare(fail, hash, function(err, result) {
      console.log(result);
    });
  });
});

bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(pass, salt, function(err, hash) {
    // returns hash
    bcrypt.compare(correct, hash, function(err, result) {
      console.log(result);
    });
  });
});
