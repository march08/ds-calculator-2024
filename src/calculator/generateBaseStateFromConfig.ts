import type { SelectConfig, StepConfig } from './types.js';

export type StepState = Record<string, string[]>;

export const generateBaseStateFromConfig = (config: StepConfig) => {
	return config
		.filter((item) => item.type === 'select')
		.reduce(
			(res, next) => {
				const item = next as SelectConfig;
				return {
					...res,
					[item.data.key]: []
				};
			},
			{} as Record<string, string[]>
		);
};
