<script>
	import { user } from '../routes/user.js';

	let username;
	let password;

	function login() {
		// Store hash in database here
		user.auth(username, hash, ({ err }) => err && alert(err));
	}

	function register() {
		// Store hash in database here
		user.create(username, hash, ({ err }) => {
			if (err) {
				alert(err);
			} else {
				login();
			}
		});
	}
</script>


	<dev class="content">
		<h1>Spider Messenger</h1>
		<h2>Spin your own web</h2>

        <label for="username">Username</label>
        <input name="username" bind:value={username} minlength="3" maxlength="16" />
        
        <label for="password">Password</label>
        <input name="password" bind:value={password} type="password" />

        <button on:click={login}><b>Login</b></button>
        <button on:click={register}><b>Register</b></button>
	</dev>


<style>
	button {
		color: lightgray;
		background-color: darkblue;
		box-shadow: 2px 2px black;
	}
	.content {
		margin-top: 125px;
		width: 90%;
		background: #b9b9b9;
		padding: 25px;
		box-shadow: 15px 20px black;
	}
	input {
		background-color: lightgray;
	}
	
</style>
