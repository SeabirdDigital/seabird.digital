<script>
    import Button from "./reuseable/Button.svelte";
</script>

{#if location.pathname != "/calculator"}
    <p class="w-[28rem] my-6">Eller få en omedelbar web design offert:</p>
    <Button href="/calculator" class="bg-pink-500">Få en offert</Button>
{/if}