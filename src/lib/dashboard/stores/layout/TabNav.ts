import { writable } from 'svelte/store';

export const SelectedTabNavItem = writable<string | undefined>(undefined);
