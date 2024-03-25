import type { StoredCalcState, StoredCalcStateGroup } from '../types.js';

const isSectionCompleted = (section: StoredCalcStateGroup) =>
	Object.values(section).every((val) => val.length > 0);

const isAreaOk = (
	selectedAreas: string[],
	step: keyof StoredCalcState,
	section: StoredCalcStateGroup
) => {
	if (selectedAreas.includes(step)) {
		return isSectionCompleted(section);
	}

	// we can display it because the section is not a requirement
	return true;
};

export const arePrevStepsCompleted = (
	requiredAreas: (keyof StoredCalcState)[],
	state: StoredCalcState
) => {
	if (!isSectionCompleted(state.first)) {
		return false;
	}

	return requiredAreas.length === 0
		? true
		: requiredAreas.every((businessArea) =>
				isAreaOk(state.first.businessArea, businessArea, state[businessArea])
			);
};

export const isSectionVisible = (
	submissionFormState: StoredCalcState,
	prevSteps: (keyof StoredCalcState)[],
	thisArea?: string
) => {
	const selectedBusinessAreas = submissionFormState.first.businessArea;

	return (thisArea ? selectedBusinessAreas.includes('PROC') : true) &&
		arePrevStepsCompleted(prevSteps, submissionFormState)
		? true
		: false;
};
