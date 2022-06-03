<script lang="ts">
    import "./index.scss"
    import axios from "axios"

    let alert = { success: false, error: false };
    let address = "";

    async function sendEly(e: Event) {
        e.preventDefault();
        window.grecaptcha.ready(() => {
            grecaptcha.execute('6Ld6szAgAAAAAFX7Bzov3dnnUNtwY59AmU9L4PkL', {action: 'submit'}).then(async (token: string) => {
                const data = await axios.post(`https://faucet.elysiumapi.com/recaptcha?token=${token}`,);
                if (data.data.data) {
                    alert.success = true;
                } else {
                    alert.error = true;
                }
            });
        })
    }
</script>

<section>
    <h1>Elysium Faucet</h1>
    {#if alert.success}
    <p class="success">Sucess check your wallet!</p>
    {/if}
    {#if alert.error}
    <p class="error">Request failed...</p>
    {/if}
    <input bind:value={address} placeholder="Your Wallet Address..."/>
    <button class="give-button" on:click|once={sendEly}>Give Me 1 Ely</button>
</section>