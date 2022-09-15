<script lang="ts">
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

</script>

<form action="">
    <select bind:value={pageCost}>
		{#each pagePrices as page}
			<option value={page.value}>
				{page.label}
			</option>
		{/each}
	</select>

    <br>
    <input type="radio" bind:group={blogCost} id="yes" name="blog" value={2500}>
    <label for="yes">Ja (2 500 kr)</label><br>
    <input type="radio" bind:group={blogCost} id="no" name="blog" value={0}>
    <label for="no">Nej (0 kr)</label><br>

    {pageCost + blogCost}
</form>