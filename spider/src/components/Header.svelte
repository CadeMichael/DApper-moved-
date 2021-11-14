<script>
    import { username, user } from '../routes/user.js';

    function signout(){
        user.leave();
        username.set('');
    }

</script>

<main>
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