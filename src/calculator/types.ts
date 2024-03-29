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
	isResubmitting: boolean;
	isSubmitted: boolean;
	isInitLoaded: boolean;
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
	elementId: 'bar' | 'pie' | 'calendar';
	text: string;
	X: string | null;
	Y: string | null;
	cardMainValue: string;
	cardMainValueDollars?: boolean;
	// per year
	dollarsYear: NumberRange | null;
	// per year
	employeeHoursYear: NumberRange | null;
	onboardingDaysVendor: NumberRange | null;
	onboardingDaysCandidate: NumberRange | null;
	onboardingDaysCustomer: NumberRange | null;
	candidatesYear: NumberRange | null;
};

export type NumberRange = [number, number];
