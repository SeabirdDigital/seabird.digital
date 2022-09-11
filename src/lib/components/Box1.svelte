<script lang="ts">
    let y: number = 0
</script>

<svelte:window bind:scrollY={y} />

<div class="hidden md:block">
    <div class="-z-10 absolute -right-[150px] -top-[125px] w-[400px] h-[250px] bg-emerald-500"/>
    <div class="-z-10 absolute -right-[150px] -top-[125px] w-[400px] h-[250px] border-8 border-black" style="transform: rotate({10 + y * .036}deg);"/>
</div>