export type Steps = 1 | 2 | 3;

export type Option = Readonly<{ key: string; label: string }>;
export type OptionOrDelimiter = Option | Readonly<{ key?: string; title: string }>;

export type StoredCalcStateGroup = Record<string, string[]>;

export type StoredCalcState = {
	first: StoredCalcStateGroup;
	B2B: StoredCalcStateGroup;
	PROC: StoredCalcStateGroup;
	HR: StoredCalcStateGroup;
	B2C: StoredCalcStateGroup;
	last: StoredCalcStateGroup;
};

export type UIState = {
	currentFocus: keyof StoredCalcState;
};

export type SelectConfig = {
	type: 'select';
	data: {
		key: string;
		placeholder: string;
		options: Readonly<OptionOrDelimiter[]>;
		multiselect?: true;
		multiselectDelimiter?: string;
	};
};

export type TextConfig = {
	type: 'text';
	data: string;
};

export type SelectAreaType = 'B2B' | 'Procurement' | 'HR' | 'B2C';

export type StepConfig = Readonly<(SelectConfig | TextConfig)[]>;

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
