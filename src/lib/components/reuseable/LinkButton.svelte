<script lang="ts">
    export let href: string;
    
    let className: string = ""
    export { className as class }
</script>

<a {href} class="font-paytone mt-2 border-b-4 border-black pb-1 hover:mt-4 hover:border-transparent hover:pb-3 duration-100 {className}">
    <slot/>
</a>