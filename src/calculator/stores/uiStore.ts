import { writable } from 'svelte/store';
import type { UIState } from '../types.js';
import { storage } from '../utils/localStorage.js';

const LS_KEY = 'ASSESSMENT_FORM_UI_STATE';

const localStorageState = storage(LS_KEY);

export const getUiStore = () => {
	// __TODO nee
	const uiDefaultState: UIState = {
		currentFocus: 'first',
		isResubmitting: false,
		isSubmitted: false,
		isInitLoaded: false
	};
	const persistedState = localStorageState.get() || {};

	const initialState = {
		...uiDefaultState,
		...persistedState
	};

	const store = writable<UIState>(initialState);

	store.subscribe((state) => {
		localStorageState.set(state);
	});

	const resetStore = () => {
		store.set(uiDefaultState);
	};

	return { store, defaultState: uiDefaultState, resetStore };
};
