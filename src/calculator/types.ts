export type Steps = 1 | 2 | 3;

export type Option = { key: string; label: string };

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

export type CalculatedResult = {
	elementId: string;
	text: string;
	X: string | null;
	Y: string | null;
	// per year
	financialImpact: [number, number] | null;
	// per year
	hourlyImpact: [number, number] | null;
};

export type NumberRange = [number, number];
