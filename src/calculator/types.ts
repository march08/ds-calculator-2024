export type Steps = 1 | 2 | 3;

export type StoredCalcState = Record<string, Record<string, string[] | null>>;
export type SelectConfig = {
	type: 'select';
	data: {
		key: string;
		placeholder: string;
		title: string;
		options: { key: string; label: string }[];
		multiselect?: true;
		multiselectDelimiter?: string;
	};
};

export type TextConfig = {
	type: 'text';
	data: string;
};

export type SelectAreaType = 'B2B' | 'Procurement' | 'HR' | 'B2C';

export type StepConfig = (SelectConfig | TextConfig)[];
