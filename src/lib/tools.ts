import { cols, rows, ToggleOverlay } from "./components/Load";

export const goto = (url: string) => {
    if (url == location.href || url == location.pathname)
        return;

    ToggleOverlay();
    setTimeout(() => {
        location.href = url;
    }, 1000);
}