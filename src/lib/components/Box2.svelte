<script lang="ts">
    let y: number = 0
</script>

<svelte:window bind:scrollY={y} />

<div class="hidden sm:block">
    <div class="absolute -left-[150px] -bottom-[150px] -rotate-[17deg] w-[400px] 2xl:w-[550px] h-[300px] 2xl:h-[450px] bg-sky-400"/>
    <div class="absolute -left-[150px] w-[400px] 2xl:w-[550px] h-[300px] 2xl:h-[450px] border-4 border-black" style="bottom: {y * -.01 - 150}px;transform: rotate({-26 + y * -.01}deg);"/>
</div>
