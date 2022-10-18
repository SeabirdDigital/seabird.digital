import anime from "animejs";

    let wrapper = document.getElementById("tiles") || new HTMLElement,
    toggled = true;
    
    export let cols = Math.floor(wrapper.clientWidth / 50),
        rows = Math.floor(wrapper.clientHeight / 50);
        
    
    
    export const ToggleOverlay = () => {
        toggled = !toggled;

        anime({
            targets: ".tile",
            opacity: toggled ? 1 : 0,
            delay: anime.stagger(50, {
                grid: [cols, rows]
            })
        });
    }

    const createTile = () => {
        console.log(cols)
        const tile = document.createElement("div");
        tile.classList.add("tile");

        if (!toggled)
            tile.style.opacity = "0";

        return tile;
    }

    const createTiles = (quantity: number) => {
        Array.from(Array(quantity)).map((tile, index) => {
            wrapper.appendChild(createTile());
        });
    }

    const createGrid = () => {
        wrapper.innerHTML = "";
        
        const size = 50;
        
        cols = Math.floor(wrapper.clientWidth / size);
        rows = Math.floor(wrapper.clientHeight / size);
        
        wrapper.style.setProperty("--cols", cols.toString());
        wrapper.style.setProperty("--rows", rows.toString());
        
        createTiles(cols * rows);
    }

    createGrid();

    window.onresize = () => createGrid();

    window.addEventListener('load', function () {
        setTimeout(() => {
            ToggleOverlay();
        }, 500);
    })