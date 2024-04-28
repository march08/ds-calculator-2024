import type { CalculatedResult } from '../types.js';

const sort = <T extends CalculatedResult>(input: T[]) => {
	if (input.length === 0) {
		return [];
	}

	const res: T[] = [];
	const from: T[] = [...input];

	while (from.length > 0) {
		const lastAdded = res[res.length - 1] || null;
		const lastTypeAdded = lastAdded?.illustrationType || '';
		// we add first that is not the same as the last added. If there are no items, then add the first one
		const foundIndex = from.findIndex((item) => item.illustrationType !== lastTypeAdded);
		const nextToAddIndex = foundIndex > -1 ? foundIndex : 0;
		const nextToAdd = from[nextToAddIndex];
		from.splice(nextToAddIndex, 1);

		res.push(nextToAdd);
	}

	return res;
};

/**
 * try not to have 2 same items next to each other (by type)
 * very naive algorithm
 */
export const sortCalculatedResult = <T extends CalculatedResult>(input: T[]) => {
	const firstRun = sort(input);
	const secondRun = sort(firstRun.reverse());

	return secondRun;
};
