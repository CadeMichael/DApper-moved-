import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

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