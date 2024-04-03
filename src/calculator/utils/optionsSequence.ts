import type { StoredCalcState } from '../types.js';

export const getOptionsSequence = (state: StoredCalcState, businessAreas?: string[]) => {
	const areas = state.first.businessArea || businessAreas;

	const variableOptions = areas
		.map((businessArea) => Object.keys(state[businessArea as keyof StoredCalcState]))
		.flat();
	return [...Object.keys(state.first), ...variableOptions, ...Object.keys(state.last)];
};
