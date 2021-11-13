<script>
  import { user } from './user';

  let username;
  let password;

  function login(){
    user.auth(username, password, ({ err }) => err && alert(err));
  }

  function register(){
    user.create(username, password, ({ err }) => {
      if (err) {
        alert(err);
      } else {
        login();
      }
    });
  }
</script>

<!-- <dev class = "content"> 
<h1>Spider Messenger</h1>
<h2>Spin your own web</h2>

<hr>

<form>
    <table class = "inputLogin">
    <tr>
	<td> <b>Name:</b> </td>
	<td colspan="2"> <input placeholder = "Unique ID"> </td>
    </tr>
    <tr>
	<td> <b>Password:</b> </td>
	<td colspan="2"> <input type = "password" placeholder = "Password"> </td> 
    </tr>
    <tr> 
	<td> <b>Ready...</b> </td>
	<td> <button on:click={login}><b>Login</b></button> </td>
	<td> <button on:click={register}><b>Register</b></button> </td>
    </tr>
    </table>
</form>
</dev> -->

<label for="username">Username</label>
<input name="username" bind:value={username} minlength="3" maxlength="16" />

<label for="password">Password</label>
<input name="password" bind:value={password} type="password" />

<td> <button on:click={login}><b>Login</b></button> </td>
<td> <button on:click={register}><b>Register</b></button> </td>



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
