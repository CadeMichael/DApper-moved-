<script>
    import { username, user } from './user';

    function signout(){
        user.leave();
        username.set('');
    }

</script>

<main>
    <h1>Header</h1>
    {#if $username}
        <div class='user-info'>
            <span>Hello {$username}!</span>
        </div>

        <button class="singout-button" on:click={signout}> 
            Sign Out 
        </button>

    {:else}
        <h3>Gun Chat Default Header!</h3>
    {/if}
</main>