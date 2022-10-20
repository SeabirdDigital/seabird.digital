import { animating, cols, rows, ToggleOverlay } from "./components/Load";

export const goto = (url: string) => {
    console.log(animating)
    if (url == location.href || url == location.pathname || animating)
        return;

    ToggleOverlay();
    setTimeout(() => {
        location.href = url;
    }, 500);
}