<script lang="ts">
    import "./index.scss"
    import { ethers } from "ethers";

    let address = "";

    async function sendEly() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const tx = await signer.sendTransaction({
            to: address,
            value: ethers.utils.parseEther("1.0"),
        });
    }
</script>

<section>
    <h1>Elysium Faucet</h1>
    <input bind:value={address} placeholder="Your Wallet Address..."/>
    <a class="give-button" on:click|once={sendEly}>Give Me 1 Ely</a>
</section>