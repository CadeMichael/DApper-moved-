<script>
    import Header from '../components/Header.svelte'
    import Login from '../components/Login.svelte'
    console.log('hello world')
</script>

<svelte:head>
    <title>Spider Messenger</title>
</svelte:head>

<Header />
<main>
<Login />
</main>

<h1>Welcome to SvelteKit</h1>


<style>
    h1 {
        color: red;
    }
    main {
		background: darkblue;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
