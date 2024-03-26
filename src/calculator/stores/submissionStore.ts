import { writable } from 'svelte/store';
import type { FlowConfig } from '../config.js';
import { generateBaseStateFromConfig } from '../utils/generateBaseStateFromConfig.js';
import type { StoredCalcState } from '../types.js';
import { storage } from '../utils/localStorage.js';

const LS_KEY = 'ASSESSMENT_FORM_STATE';

const localStorageState = storage(LS_KEY);

export const getSubmissionStore = (config: FlowConfig) => {
	const defaultState = {
		first: generateBaseStateFromConfig(config.calcConfigStep1),
		B2B: generateBaseStateFromConfig(config.calcConfigStep2b2b),
		PROC: generateBaseStateFromConfig(config.calcConfigStep2procurement),
		HR: generateBaseStateFromConfig(config.calcConfigStep2hr),
		B2C: generateBaseStateFromConfig(config.calcConfigStep2b2c),
		last: generateBaseStateFromConfig(config.calcConfigLast)
	};

	const persistedState = localStorageState.get() || {};

	const initialState = {
		...defaultState,
		...persistedState
	};

	const store = writable<StoredCalcState>(initialState);

	store.subscribe((state) => {
		localStorageState.set(state);
	});

	const resetStore = () => {
		store.set(defaultState);
	};

	return { store, defaultState, resetStore };
};
