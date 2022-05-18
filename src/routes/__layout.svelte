<script lang="ts">
    	import '../app.scss';
		import './layout.scss';
</script>

<svelte:head>
    <title>Elysium Faucet</title>
    <meta name="description" content="Open Source Platform for Decentralized Applications Faucet"/>
</svelte:head>

<header>
	<section class="site-status">
		<div class="network-container">
			<p class="health"/>
			<p><strong>testnet</strong></p>
			<p class="separator">#</p>
			<p>1,234</p>
		</div>
	</section>
	<hr/>
	<section class="site-menu">
		<a class="logo" href="/">
			<img src="/images/elysium.png" alt="elysium"/>
			<span>Elysium</span>
		</a>
		<nav>
			<ul><li></li></ul>
		</nav>
	</section>
</header>

<main>
	<slot />
</main>

<footer>
</footer>