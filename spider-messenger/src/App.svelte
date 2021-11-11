<script>
  let username = 'UserName';
  let password = 'PassWord';
</script>

<main> 

  <dev class = "content"> 
    <h1>Spider Messenger</h1>
    <h2>Spin your own web</h2>

    <hr>

    <form>
      <table>
        <tr>
          <td> <b>Name:</b> </td>
          <td> <input placeholder = {username}> </td>
        </tr>
        <tr>
          <td> <b>Password:</b> </td>
          <td> <input type = "password" placeholder = {password}> </td> 
        </tr>
      </table>
      <table class="loginPage">
        <tr> 
          <th><button on:click><b>Login</b></button></th>
          <th><button on:click><b>Register</b></button></th>
        </tr>
      </table>
    </form>
  </dev>
</main>

<style>
  .loginPage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main {
    background: darkblue;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  table {
    box-shadow: 5px 5px #565656;
  }
  input {
    background-color: lightgray;
  }
</style>
