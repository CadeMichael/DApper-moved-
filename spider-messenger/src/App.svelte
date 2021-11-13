<script>
  import Login from './Login.svelte';
  import Header from './Header.svelte';
  let logged = false;
</script>

<main> 
  <Header />
  {#if !logged}
    <Login/>
  {/if}
</main>

<style>
  main {
    background: darkblue;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
