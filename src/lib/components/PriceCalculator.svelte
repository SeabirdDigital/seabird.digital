<script lang="ts">
    import { space } from "svelte/internal";
    import Button from "./reuseable/Button.svelte";

    let pageCost: number;
    const pagePrices: { value: number, label: string }[] = [
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

    let useBlog: boolean;
    const blogCost: number = 2500;
    
    let useCart: boolean;
    let cartCost: number = 0;
    const cartPrices: { value: number, label: string }[] = [
        { value: 5000, label: "1-10 (+ 5 000 kr)" },
        { value: 10000, label: "11-50 (+ 10 000 kr)" },
        { value: 15000, label: "51-100 (+ 15 000 kr)" },
        { value: 25000, label: "101-500 (+ 25 000 kr)" },
        { value: 50000, label: "501-1 000 (+ 50 000 kr)" },
        { value: 100000, label: "1 000+ (+ 100 000 kr)" },
    ]

    let getLogo: boolean;
    const logoCost: number = 1500;
    

    let contactForm: boolean;

    let liveChat: boolean;
    const liveChatCost: number = 500;

    let bookingSystem: boolean;
    const bookingSystemCost: number = 2000;

    let calculator: boolean;
    const calculatorCost: number = 2000;

    let forum: boolean;
    const forumCost: number = 5000;
    
    let page: number = 0
</script>

<form class="w-full flex flex-col text-left"  action="">
    {#if page == 0}
        <label class="text-2xl font-paytone mb-2" for="pages" >Hur många sidor behöver du?</label>
        <select id="pages" name="pages" bind:value={pageCost} class="appearance-none outline-none border-4 hard-shadow focus:shadow-none border-black p-2 mb-2 2xl:text-xl bg-chevron bg-[right] bg-no-repeat bg-[length:24px]">
            {#each pagePrices as page}
                <option value={page.value}>
                    {page.label}
                </option>
            {/each}
        </select>

        <span class="mt-3 text-black/75">TIPS: Fundera över hur du kan presentera din information så kortfattat som möjligt. (Exempel: Behöver du verkligen en Om-sida? Eller kan du berätta för dina besökare vad du sysslar med på din startsida?)</span>
    {/if}

    {#if page == 1}
        <span class="text-2xl font-paytone mb-2">Behöver du en blog?</span>
        <div class="flex gap-2">
            <input type="radio" bind:group={useBlog} id="blog-yes" name="blog" value={true}>
            <label for="blog-yes">Ja (+ 2 500 kr)</label>
        </div>
        <div class="flex gap-2">
            <input type="radio" bind:group={useBlog} id="blog-no" name="blog" value={false}>
            <label for="blog-no">Nej (+ 0 kr)</label>
        </div>

        <span class="mt-3 text-black/75">TIPS: Bloggar med bra innehåll är fantastiska för att förbättra din Google-ranking.</span>
    {/if}
    
    {#if page == 2}
        <span class="text-2xl font-paytone mb-2">Behöver du en butik och kundvagn?</span>
        <div class="flex gap-2">
            <input type="radio" bind:group={useCart} id="cart-yes" name="cart" value={true}>
            <label for="cart-yes">Ja</label>
        </div>
        <div class="flex gap-2">
            <input type="radio" bind:group={useCart} id="cart-no" name="cart" value={false}>
            <label for="cart-no">Nej (+0 kr)</label>
        </div>
        
        <span class="mt-3 text-black/75">TIPS: Att sälja produkter online är viktigt för vissa företag, medan andra lätt kan gå utan en. Se till att det är en viktig del av din affärsmodell innan du går in på den vägen.</span>
        
        {#if useCart == true}
        <label class="text-2xl font-paytone mb-2 mt-6" for="cartPrice" >Hur många sidor behöver du?</label>
        <select id="cartrice" name="cartPrice" bind:value={cartCost} class="appearance-none outline-none border-4 hard-shadow focus:shadow-none border-black p-2 mb-2 2xl:text-xl bg-chevron bg-[right] bg-no-repeat bg-[length:24px]">
            {#each cartPrices as cartOption}
            <option value={cartOption.value}>
                {cartOption.label}
            </option>
            {/each}
        </select>
        {/if}
    {/if}

    {#if page == 3}
        <span class="text-2xl font-paytone mb-2">Behöver du en logotyp?</span>
        <div class="flex gap-2">
            <input type="radio" bind:group={getLogo} id="logo-yes" name="logo" value={true}>
            <label for="logo-yes">Ja (+ 1 500 kr)</label>
        </div>
        <div class="flex gap-2">
            <input type="radio" bind:group={getLogo} id="logo-no" name="logo" value={false}>
            <label for="logo-no">Nej (+ 0 kr)</label>
        </div>

        <span class="mt-3 text-black/75">TIPS: En bra webbplats kommer från ett bra varumärke. Se till att du har en söt logotyp innan du startar ett webbplatsprojekt.</span>
    {/if}

    {#if page == 4}
        <span class="text-2xl font-paytone mb-2">Behöver du en logotyp?</span>
        <div class="flex gap-2">
            <input type="checkbox" id="contact" name="contact" bind:checked={contactForm}>
            <label for="contact">Kontaktformulär (+ 0 kr)</label>
        </div>
        <div class="flex gap-2">
            <input type="checkbox" id="live" name="live" bind:checked={liveChat}>
            <label for="live">Livechatt (+ 500 kr)</label>
        </div>
        <div class="flex gap-2">
            <input type="checkbox" id="booking" name="booking" bind:checked={bookingSystem}>
            <label for="booking">Bokningssystem (+ 2 000 kr)</label>
        </div>
        <div class="flex gap-2">
            <input type="checkbox" id="calculator" name="calculator" bind:checked={calculator}>
            <label for="calculator">Kalkylator (+ 2 000 kr)</label>
        </div>
        <div class="flex gap-2">
            <input type="checkbox" id="forum" name="forum" bind:checked={forum}>
            <label for="forum">Forum/Medlemssektion (+ 5 000 kr)</label>
        </div>

        <span class="mt-3 text-black/75">TIPS: En bra webbplats kommer från ett bra varumärke. Se till att du har en söt logotyp innan du startar ett webbplatsprojekt.</span>
    {/if}

    {#if page == 5}
        <span class="text-xl font-paytone mb-2">Tack! Baserat på dina svar kommer din heta nya webbplats att kosta: </span>
        <div class="flex justify-between items-center p-2 border-4 border-black hard-shadow hover:shadow-none bg-white text-2xl">
            <div>
                {
                    pageCost +
                    (useBlog ? blogCost : 0) +
                    (useCart ? cartCost : 0) +
                    (getLogo ? logoCost : 0) +
                    (liveChat ? liveChatCost : 0) +
                    (bookingSystem ? bookingSystemCost : 0) +
                    (calculator ? calculatorCost : 0) +
                    (forum ? forumCost : 0)
                } kr
            </div>

            <div class="text-xl text-black/50">
                exclusive moms.
            </div>
        </div>
    
        <span class="mt-3 text-black/75">Gillar du det du ser? Fyll i dina kontaktuppgifter i formuläret nedan. 🙂</span>
    {/if}
    
    
    <div class="w-full flex justify-between mt-12">
        {#if page > 0}
            <Button onClick={() => page--} useButtonElement class="bg-gray-300">Tillbaka</Button>
        {:else}
            <div/>
        {/if}
        {#if page < 5}
            <Button onClick={() => page++} useButtonElement flipRotation class="bg-sb-yellow">Nästa</Button>
        {:else}
            <div/>
        {/if}
    </div>
</form>