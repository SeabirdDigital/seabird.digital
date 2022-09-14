
<script lang="ts">
    export let flipRotation: boolean = false;
    export let noRotate: boolean = false;
    export let href: string;

    let className: string = ""
    export { className as class }
</script>

<a {href} class="px-6 py-3 border-4 font-paytone hover:rotate-0 border-black hard-shadow hover:shadow-none {noRotate ? "" : (flipRotation ? "rotate-2" : "-rotate-2")} {className}">
    <slot/>
</a>
