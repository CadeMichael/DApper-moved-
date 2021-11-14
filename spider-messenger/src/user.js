import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
export const bcrypt = require('bcrypt');
import { writable } from 'svelte/store';
//const { createHash } = require('crypto');

/**
export const hash = (input) => {
    // set the alg -> git it info -> get output
  crypo.createHash('sha256').update(input).digest('hex');
};
*/
// Instantiating Database
export const db = GUN();

// Gun User
export const user = db.user().recall({sessionStorage: true});

// Current User's username
export const username = writable('');

user.get('alias').on(v => username.set(v));

db.on('auth', async(event) => {
    console.log(`in db.on auth`);
    const alias = await user.get('alias'); // username string
    username.set(alias);

    console.log(`Signed in as ${alias}`);
});
