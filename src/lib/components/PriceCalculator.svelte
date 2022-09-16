<script lang="ts">
    import Button from "./reuseable/Button.svelte";

    let pageCost: number;
    let pagePrices: { value: number, label: string }[] = [
        { value: 3000, label: "1 (3 000 kr)" },
        { value: 4500, label: "2 (4 500 kr)" },
        { value: 6000, label: "3 (6 000 kr)" },
        { value: 7500, label: "4 (7 500 kr)" },
        { value: 9000, label: "5 (9 000 kr)" },
        { value: 10500, label: "6 (10 500 kr)" },
        { value: 12000, label: "7 (12 000 kr)" },
        { value: 13500, label: "8 (13 500 kr)" },
        { value: 15000, label: "9 (15 000 kr)" },
        { value: 16500, label: "10 (16 500 kr)" },
        { value: 18000, label: "11 (18 000 kr)" },
        { value: 19500, label: "12 (19 500 kr)" },
        { value: 21000, label: "13 (21 000 kr)" },
        { value: 22500, label: "14 (22 500 kr)" },
        { value: 24000, label: "15 (24 000 kr)" },
        { value: 25500, label: "16 (25 500 kr)" },
        { value: 27000, label: "17 (27 000 kr)" },
        { value: 28500, label: "17 (28 500 kr)" },
        { value: 30000, label: "18 (30 000 kr)" },
        { value: 31500, label: "19 (31 500 kr)" },
    ]

    let blogCost: number = 0;

    let page: number = 0
</script>

<form class="w-full flex flex-col text-left"  action="">
    
    {#if page == 0}
        <label for="pages" >Hur många sidor behöver du?</label>
        <select name="pages" bind:value={pageCost} class="appearance-none outline-none border-4 hard-shadow focus:shadow-none border-black p-2 mb-2 2xl:text-xl bg-chevron bg-[right] bg-no-repeat bg-[length:24px]">
            {#each pagePrices as page}
                <option value={page.value}>
                    {page.label}
                </option>
            {/each}
        </select>

        <span>TIPS: Fundera över hur du kan presentera din information så kortfattat som möjligt. (Exempel: Behöver du verkligen en Om-sida? Eller kan du berätta för dina besökare vad du sysslar med på din startsida?)</span>
    {/if}

    {#if page == 1}
        <input type="radio" bind:group={blogCost} id="yes" name="blog" value={2500}>
        <label for="yes">Ja (2 500 kr)</label><br>
        <input type="radio" bind:group={blogCost} id="no" name="blog" value={0}>
        <label for="no">Nej (0 kr)</label><br>
    {/if}


    <div class="w-full flex justify-between mt-12">
        {#if page > 0}
            <Button onClick={() => page--} useButtonElement class="bg-gray-300">Tillbaka</Button>
        {:else}
            <div/>
        {/if}
        <Button onClick={() => page++} useButtonElement flipRotation class="bg-sb-yellow">Nästa</Button>
    </div>
</form>