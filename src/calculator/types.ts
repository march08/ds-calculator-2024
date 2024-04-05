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
	activeOption: string | null;
	optionsSequence: string[];
};

export type SelectConfig = {
	type: 'select';
	data: {
		key: string;
		placeholder: string;
		autoposition?: boolean;
		options: Readonly<OptionOrDelimiter[]>;
		multiselect?: true;
		multiselectDelimiter?: string;
		displayValueLowercase?: boolean;
	};
};

export type TextConfig = {
	type: 'text';
	data: string;
};

export type SelectAreaType = 'B2B' | 'Procurement' | 'HR' | 'B2C';

export type StepConfig = Readonly<(SelectConfig | TextConfig)[]>;

export type ResultRenderConfigVariable = {
	type: 'variable';
	key: keyof CalculatedResult;
};

export type ResultRenderConfigText = {
	type: 'text';
	content: string;
};

export type ResultRenderConfigItem = ResultRenderConfigVariable | ResultRenderConfigText;

export type CalculatedResult = {
	illustrationType: 'bar' | 'pie' | 'calendar';
	renderConfig: ResultRenderConfigItem[];
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

export type OverResult_TotalsPerArea = {
	employeeHoursYear: NumberRange;
	employeeHoursYearText: string;
	// total dollars
	totalDollarsYear: NumberRange;
	totalDollarsYearText: string;
	// total employee hours
	totalEmployeeHoursYear: NumberRange;
	totalEmployeeHoursYearText: string;
	// total candidate onboarding
	totalOnboardingDaysCandidate: NumberRange;
	totalOnboardingDaysCandidateText: string;
	// total vendor onboarding
	totalOnboardingDaysVendor: NumberRange;
	totalOnboardingDaysVendorText: string;
	// total vendor customer
	totalOnboardingDaysCustomer: NumberRange;
	totalOnboardingDaysCustomerText: string;
	// total candidate year
	totalCandidateYear: NumberRange;
	totalCandidateYearText: string;
};

export type TopTwoResultItem = {
	displayValue: string | null;
	text: string;
	fullText: string;
	illustration: 'person' | 'stack';
};

export type TopTwoResult = TopTwoResultItem[];

export type OverallResult = {
	allRes: CalculatedResult[];
	topTwo: TopTwoResult;
	splitResult: {
		title: string;
		result: CalculatedResult[];
	}[];
} & OverResult_TotalsPerArea;

export type ScrollInto = (
	target: HTMLElement,
	options: {
		offset?: number;
		duration?: number;
		lock?: boolean;
		force?: boolean;
		onComplete?: VoidFunction;
		block?: 'center';
		behavior?: 'smooth';
	}
) => void;
