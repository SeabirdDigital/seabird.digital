import { cols, rows, ToggleOverlay } from "./components/Load";

export const goto = (url: string) => {
    ToggleOverlay();
    setTimeout(() => {
        location.href = url;
    }, cols * 75);
}