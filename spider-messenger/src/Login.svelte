<script>
  import { user } from './user';
  const bcrypt = require('bcrypt');
  let username;
  let password;

  function login(){
    bcrypt.genSalt(saltRounds, function(err, salt) {  
      bcrypt.hash(password, salt, function(err, hash) {
        // Store hash in database here
        user.auth(username, hash, ({ err }) => err && alert(err));
      });
    });
  }

  function register(){
    bcrypt.genSalt(saltRounds, function(err, salt) {  
      bcrypt.hash(password, salt, function(err, hash) {
        // Store hash in database here
        user.create(username, hash, ({ err }) => {
          if (err) {
            alert(err);
          } else {
            login();
          }
        });
      });
    });
  }
</script>

<dev class = "content"> 
<h1>Spider Messenger</h1>
<h2>Spin your own web</h2>

<hr>

    <table class = "inputLogin">
    <tr>
	<td><label for="username">Username</label></td>
	<td colspan="2"><input name="username" bind:value={username} minlength="3" maxlength="16" /> </td>
    </tr>
    <tr>
	<td><label for="password">Password</label></td>
	<td colspan="2"><input name="password" bind:value={password} type="password" /></td>
    </tr>
    <tr> 
	<td> <b>Ready...</b> </td>
	<td> <button on:click={login}><b>Login</b></button> </td>
	<td> <button on:click={register}><b>Register</b></button> </td>
    </tr>
    </table>

<!-- <label for="username">Username</label>
<input name="username" bind:value={username} minlength="3" maxlength="16" />

<label for="password">Password</label>
<input name="password" bind:value={password} type="password" />

<button on:click={login}><b>Login</b></button> 
<button on:click={register}><b>Register</b></button> -->

</dev> 

<style>
  button {
    color: lightgray;
    background-color: darkblue;
    box-shadow: 2px 2px black;
  }
  .content {
    margin-top: 125px;
    background: #b9b9b9;
    padding: 25px;
    box-shadow: 15px 20px black;
  }
  form {
    margin: 50px; 
    justify-content: center; 
  }
  tr { 
    background-color: darkgrey;
  }
  td {
    padding: 10px
  }
  .inputLogin {
    box-shadow: 5px 5px #565656;
  }
  input {
    background-color: lightgray;
  }
</style>
