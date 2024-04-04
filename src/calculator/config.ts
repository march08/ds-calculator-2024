import type { StepConfig } from './types.js';

const driverOptions = [
	{
		key: 'B2B',
		title: 'Select your priorities for B2B sales'
	},
	{
		key: 'B2B_1_seller_productivity',
		label: 'Drive business growth from faster, more productive selling'
	},
	{
		key: 'B2B_2_reduced_risk_exposure',
		label: 'Reduce risk exposure by mitigating risky clauses'
	},
	{
		key: 'B2B_3_reduced_revenue_leakage',
		label: 'Maximize agreement value and limit leakage'
	},
	{
		key: 'PROC',
		title: 'Select your priorities for procurement'
	},
	{
		key: 'PROC_1_onboard_vendors',
		label: 'Onboard vendors faster to access goods and services sooner'
	},
	{
		key: 'PROC_2_improved_productivity',
		label: 'Improve operational efficiency to increase capacity'
	},
	{
		key: 'PROC_3_reduce_risk',
		label: 'Reduce risk exposure by mitigating risky clauses'
	},
	{
		key: 'PROC_4_max_value',
		label: 'Maximize value from spend and receive full benefits'
	},
	{
		key: 'HR',
		title: 'Select your priorities for HR'
	},
	{
		key: 'HR_1_faster_onboard',
		label: 'Onboard new hires faster and easier'
	},
	{ key: 'HR_2_attract_retain_talent', label: 'Attract and retain top talent' },
	{
		key: 'HR_3_staff_productivity',
		label: 'Increase staff productivity to expand scope'
	},
	{
		key: 'B2C',
		title: 'Select your priorities for B2C sales'
	},
	{
		key: 'B2C_1_onboard_customers',
		label: 'Onboard customers faster and easier'
	},
	{ key: 'B2C_2_attract_retain', label: 'Attract and retain more customers' },
	{
		key: 'B2C_3_boost_productivity',
		label: 'Boost staff productivity to improve speed and capacity'
	}
] as const;

export type FlowConfig = {
	calcConfigStep1: StepConfig;
	calcConfigStep2b2b: StepConfig;
	calcConfigStep2hr: StepConfig;
	calcConfigStep2procurement: StepConfig;
	calcConfigStep2b2c: StepConfig;
	calcConfigLast: StepConfig;
};
export const flowConfig: FlowConfig = {
	calcConfigLast: [
		{
			type: 'text',
			data: 'Lastly, I want to'
		},
		{
			type: 'select',
			data: {
				key: 'driver',
				placeholder: 'Add Priorities',
				multiselect: true,
				multiselectDelimiter: '; ',
				options: driverOptions
			}
		}
	],
	calcConfigStep1: [
		{
			type: 'text',
			data: 'I work in'
		},
		{
			type: 'select',
			data: {
				key: 'businessArea',
				placeholder: 'Your Area',
				multiselect: true,
				options: [
					{
						title: 'Select your Business Process'
					},
					{ key: 'B2B', label: 'B2B' },
					{ key: 'PROC', label: 'Procurement' },
					{ key: 'HR', label: 'HR' },
					{ key: 'B2C', label: 'B2C Sales/CX' }
				]
			}
		},
		{
			type: 'text',
			data: 'for'
		},
		{
			type: 'select',
			data: {
				key: 'industry',
				placeholder: 'Your Industry',
				options: [
					{
						title: 'Select your Industry'
					},
					{ key: 'Automotive', label: 'Automotive' },
					{ key: 'Business Services', label: 'Business Services' },
					{ key: 'Construction and Real Estate', label: 'Construction and Real Estate' },
					{ key: 'Education', label: 'Education' },
					{ key: 'Energy', label: 'Energy' },
					{ key: 'Entertainment and Media', label: 'Entertainment and Media' },
					{ key: 'Financial Services', label: 'Financial Services' },
					{ key: 'Government', label: 'Government' },
					{ key: 'Healthcare', label: 'Healthcare' },
					{ key: 'Hospitality', label: 'Hospitality' },
					{ key: 'Manufacturing', label: 'Manufacturing' },
					{
						key: 'Pharmaceuticals and Biotechnology',
						label: 'Pharmaceuticals and Biotechnology'
					},
					{ key: 'Retail', label: 'Retail' },
					{ key: 'Technology', label: 'Technology' },
					{ key: 'Telecommunications', label: 'Telecommunications' },
					{ key: 'Transportation and Logistics', label: 'Transportation and Logistics' }
				]
			}
		}
	],
	calcConfigStep2b2b: [
		{
			type: 'text',
			data: 'Every year, my organization collects'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_revenue',
				placeholder: 'Revenue',
				options: [
					{
						title: 'Select your annual B2B revenue'
					},
					{
						key: '1000000',
						label: '$1 million'
					},
					{
						key: '10000000',
						label: '$10 million'
					},
					{
						key: '50000000',
						label: '$50 million'
					},
					{
						key: '100000000',
						label: '$100 million'
					},
					{
						key: '250000000',
						label: '$250 million'
					},
					{
						key: '500000000',
						label: '$500 million'
					},
					{
						key: '1000000000',
						label: '$1 billion'
					},
					{
						key: '5000000000',
						label: '$5 billion'
					}
				]
			}
		},
		{
			type: 'text',
			data: ','
		},
		{
			type: 'text',
			data: 'and processes'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_agreement_volume',
				placeholder: 'Agreement Volume',
				options: [
					{
						title: 'Select your yearly B2B agreement volume'
					},
					{
						key: '1000',
						label: '1,000 agreements'
					},
					{
						key: '2500',
						label: '2,500 agreements'
					},
					{
						key: '5000',
						label: '5,000 agreements'
					},
					{
						key: '10000',
						label: '10,000 agreements'
					},
					{
						key: '25000',
						label: '25,000 agreements'
					},
					{
						key: '50000',
						label: '50,000 agreements'
					},
					{
						key: '100000',
						label: '100,000 agreements'
					},
					{
						key: '1000000',
						label: '1,000,000 agreements'
					},
					{
						key: '10000000',
						label: '10,000,000 agreements'
					}
				]
			}
		},
		{
			type: 'text',
			data: 'using a'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_process_complexity',
				placeholder: 'Process Complexity',

				options: [
					{
						title: 'Select agreement process complexity'
					},
					{
						key: 'low',
						label: 'low complexity process'
					},
					{
						key: 'medium',
						label: 'medium complexity process'
					},
					{
						key: 'high',
						label: 'high complexity process'
					}
				]
			}
		}
	],
	calcConfigStep2hr: [
		{
			type: 'text',
			data: 'My organization has'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_count',
				placeholder: 'Employee Count',
				options: [
					{
						title: 'Select your employee count'
					},
					{
						key: '1000',
						label: '1,000 employees'
					},
					{
						key: '2500',
						label: '2,500 employees'
					},
					{
						key: '5000',
						label: '5,000 employees'
					},
					{
						key: '10000',
						label: '10,000 employees'
					},
					{
						key: '25000',
						label: '25,000 employees'
					},
					{
						key: '50000',
						label: '50,000 employees'
					},
					{
						key: '100000',
						label: '100,000 employees'
					},
					{
						key: '1000000',
						label: '1,000,000 employees'
					}
				]
			}
		},
		{
			type: 'text',
			data: ','
		},
		{
			type: 'text',
			data: 'and processes'
		},
		{
			type: 'select',
			data: {
				key: 'HR_agreement_volume',
				placeholder: 'Employee Agreement Volume',
				options: [
					{
						title: 'Select yearly employee agreement volume'
					},
					{
						key: '1000',
						label: '1,000 agreements/year'
					},
					{
						key: '2500',
						label: '2,500 agreements/year'
					},
					{
						key: '5000',
						label: '5,000 agreements/year'
					},
					{
						key: '10000',
						label: '10,000 agreements/year'
					},
					{
						key: '25000',
						label: '25,000 agreements/year'
					},
					{
						key: '50000',
						label: '50,000 agreements/year'
					},
					{
						key: '100000',
						label: '100,000 agreements/year'
					},
					{
						key: '1000000',
						label: '1,000,000 agreements/year'
					},
					{
						key: '10000000',
						label: '10,000,000 agreements/year'
					}
				]
			}
		},
		{
			type: 'text',
			data: ','
		},
		{
			type: 'text',
			data: 'mostly for'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_type',
				placeholder: 'Employee Type',
				options: [
					{
						title: 'Select most common employee type'
					},
					{
						key: 'fulltime',
						label: 'full-time employees'
					},
					{
						key: 'parttime',
						label: 'seasonal/part-time employees'
					}
				]
			}
		}
	],
	calcConfigStep2procurement: [
		{
			type: 'text',
			data: 'Every year, my organization spends'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_annual_spend',
				placeholder: 'Annual Spend',

				options: [
					{
						title: 'Select your annual spend'
					},
					{
						key: '1000000',
						label: '$1 million'
					},
					{
						key: '10000000',
						label: '$10 million'
					},
					{
						key: '50000000',
						label: '$50 million'
					},
					{
						key: '100000000',
						label: '$100 million'
					},
					{
						key: '250000000',
						label: '$250 million'
					},
					{
						key: '500000000',
						label: '$500 million'
					},
					{
						key: '1000000000',
						label: '$1 billion'
					},
					{
						key: '5000000000',
						label: '$5 billion'
					}
				]
			}
		},
		{
			type: 'text',
			data: ','
		},
		{
			type: 'text',
			data: 'through'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_spend_type',
				placeholder: 'Spend Type',
				options: [
					{
						title: 'Select your spend type'
					},
					{
						key: 'direct',
						label: 'direct spend'
					},
					{
						key: 'indirect',
						label: 'indirect spend'
					},
					{
						key: 'capex',
						label: 'CapEx spend'
					}
				]
			}
		},
		{
			type: 'text',
			data: ','
		},
		{
			type: 'text',
			data: 'and completes'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_agreement_volume',
				placeholder: 'Agreement Volume',
				options: [
					{
						title: 'Select your yearly procurement agreement volume'
					},
					{
						key: '1000',
						label: '1,000 agreements'
					},
					{
						key: '2500',
						label: '2,500 agreements'
					},
					{
						key: '5000',
						label: '5,000 agreements'
					},
					{
						key: '10000',
						label: '10,000 agreements'
					},
					{
						key: '25000',
						label: '25,000 agreements'
					},
					{
						key: '50000',
						label: '50,000 agreements'
					},
					{
						key: '100000',
						label: '100,000 agreements'
					},
					{
						key: '1000000',
						label: '1,000,000 agreements'
					},
					{
						key: '10000000',
						label: '10,000,000 agreements'
					}
				]
			}
		}
	],

	calcConfigStep2b2c: [
		{
			type: 'text',
			data: 'Every year, my organization collects'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_revenue',
				placeholder: 'Revenue',
				options: [
					{
						title: 'Select your annual B2C revenue'
					},
					{
						key: '1000000',
						label: '$1 million'
					},
					{
						key: '10000000',
						label: '$10 million'
					},
					{
						key: '50000000',
						label: '$50 million'
					},
					{
						key: '100000000',
						label: '$100 million'
					},
					{
						key: '250000000',
						label: '$250 million'
					},
					{
						key: '500000000',
						label: '$500 million'
					},
					{
						key: '1000000000',
						label: '$1 billion'
					},
					{
						key: '5000000000',
						label: '$5 billion'
					}
				]
			}
		},
		{
			type: 'text',
			data: ','
		},
		{
			type: 'text',
			data: 'and processes'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_agreement_volume',
				placeholder: 'Agreement Volume',
				options: [
					{
						title: 'Select your yearly B2C agreement volume'
					},
					{
						key: '1000',
						label: '1,000 agreements'
					},
					{
						key: '2500',
						label: '2,500 agreements'
					},
					{
						key: '5000',
						label: '5,000 agreements'
					},
					{
						key: '10000',
						label: '10,000 agreements'
					},
					{
						key: '25000',
						label: '25,000 agreements'
					},
					{
						key: '50000',
						label: '50,000 agreements'
					},
					{
						key: '100000',
						label: '100,000 agreements'
					},
					{
						key: '1000000',
						label: '1,000,000 agreements'
					},
					{
						key: '10000000',
						label: '10,000,000 agreements'
					}
				]
			}
		},
		{
			type: 'text',
			data: ','
		},
		{
			type: 'text',
			data: 'primarily collecting'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_customer_information',
				placeholder: 'Customer Information',
				options: [
					{
						title: 'Select most common information collected'
					},
					{
						key: 'signature',
						label: 'customer signature/consent'
					},
					{
						key: 'identity',
						label: 'customer data and/or verify identity'
					}
				]
			}
		}
	]
} as const;

export type DriverOption = (typeof driverOptions)[number]['key'];
