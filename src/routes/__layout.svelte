<script lang="ts">
    	import '../app.scss';
		import './layout.scss';
		import CommonUtil from "../utils/CommonUtil";
		import { ethers } from "ethers";
		import { onMount } from 'svelte';

		let addressDisplay: string;

		async function getAddress() {
			const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
			const address = await provider.send("eth_requestAccounts", []);
			addressDisplay = CommonUtil.shortenAddress(address[0]);
		}

		onMount(async () => {
			getAddress();
		})
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
		<div class="wallet">{addressDisplay ? addressDisplay:"Connect Wallet"}</div>
	</section>
</header>

<main>
	<slot />
</main>

<footer>
</footer>