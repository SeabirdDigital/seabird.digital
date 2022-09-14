
<script lang="ts">
    export let flipRotation: boolean = false;

    let className: string = ""
    export { className as class }
</script>

<button class="px-6 py-3 ml-2 border-4 font-paytone hover:rotate-0 border-black hard-shadow hover:shadow-none {flipRotation ? "rotate-2" : "-rotate-2"} {className}">
    <slot/>
</button>
