import type { ResultTextKey, ResultTranslation } from './lang/config.js';

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

export type TranslationState = {
	lang: string;
	translations: LangTranslation;
	resultTranslations: ResultTranslation;
	flowConfig: FlowConfig;
	currency: string;
	valueMultiplier: number;
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
	resultTextKey: ResultTextKey;
	illustrationType: 'bar' | 'pie' | 'calendar';
	X: string | null;
	XRaw: NumberRange;
	XText: string[];
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
		blockCenterOffset?: boolean;
	}
) => void;

export type DriverOption =
	| 'B2B'
	| 'B2B_1_seller_productivity'
	| 'B2B_2_reduced_risk_exposure'
	| 'B2B_3_reduced_revenue_leakage'
	| 'PROC'
	| 'PROC_1_onboard_vendors'
	| 'PROC_2_improved_productivity'
	| 'PROC_3_reduce_risk'
	| 'PROC_4_max_value'
	| 'HR'
	| 'HR_1_faster_onboard'
	| 'HR_2_attract_retain_talent'
	| 'HR_3_staff_productivity'
	| 'B2C'
	| 'B2C_1_onboard_customers'
	| 'B2C_2_attract_retain'
	| 'B2C_3_boost_productivity';

export type FlowConfig = {
	calcConfigStep1: StepConfig;
	calcConfigStep2b2b: StepConfig;
	calcConfigStep2hr: StepConfig;
	calcConfigStep2procurement: StepConfig;
	calcConfigStep2b2c: StepConfig;
	calcConfigLast: StepConfig;
};

export type LangTranslation = {
	title_days: string;
	confirm_selection: string;
	update_your_results: string;
	edit_your_assessment: string;
};
