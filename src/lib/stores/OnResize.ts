import { get, writable } from 'svelte/store';

const store = writable<(() => void)[]>([]);

class OnResize {
	static functions = () => get(store);
	static add = (f: () => void) => {
		store.set([f, ...this.functions()]);
	};
	static reset = () => {
		store.set([]);
	};
}

export default OnResize;
