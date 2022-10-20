import anime from "animejs";

let wrapper = document.getElementById("tiles") || new HTMLElement,
    toggled = true;

export let
    cols = Math.floor(wrapper.clientWidth / 50),
    rows = Math.floor(wrapper.clientHeight / 50),
    animating = false;

export const ToggleOverlay = () => {
    toggled = !toggled;
    animating = true;

    anime({
        targets: ".tile",
        opacity: toggled ? 1 : 0,
        delay: anime.stagger(500 / Math.sqrt(cols**2 + rows**2), {
            grid: [cols, rows],
            from: !toggled ? "first" : "last"
        })
    });
    setTimeout(() => animating = false, 500)
    
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
    
    wrapper.style.backgroundColor = "#FEE44000"
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