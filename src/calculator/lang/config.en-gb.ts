import type { FlowConfig, LangTranslation } from '../types.js';

export const flowConfig: FlowConfig = {
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
				displayValueLowercase: false,
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
			data: 'Every year, my organisation collects'
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
						label: 'Low-complexity process'
					},
					{
						key: 'medium',
						label: 'Medium-complexity process'
					},
					{
						key: 'high',
						label: 'High-complexity process'
					}
				]
			}
		}
	],
	calcConfigStep2hr: [
		{
			type: 'text',
			data: 'My organisation has'
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
						label: 'Full-time employees'
					},
					{
						key: 'parttime',
						label: 'Seasonal/part-time employees'
					}
				]
			}
		}
	],
	calcConfigStep2procurement: [
		{
			type: 'text',
			data: 'Every year, my organisation spends'
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
						label: 'Direct spend'
					},
					{
						key: 'indirect',
						label: 'Indirect spend'
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
			data: 'Every year, my organisation collects'
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
						label: 'Customer signature/consent'
					},
					{
						key: 'identity',
						label: 'Customer data and/or verify identity'
					}
				]
			}
		}
	],
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
				options: [
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
						label: 'Maximise agreement value and limit leakage'
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
						label: 'Maximise value from spend and receive full benefits'
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
				] as const
			}
		}
	]
} as const;

export const langConfig: LangTranslation = {
	confirm_selection: 'Confirm Selection',
	update_your_results: 'Update Your Results',
	edit_your_assessment: 'Edit Your assessment',
	title_days: 'days'
};

export const resultText = {
	b2b_1:
		'{X} faster deals, with the potential to reduce the sales cycle from weeks to just {Y} days.',
	b2b_2:
		'{X} more productive sellers, which frees up {Y} annual hours to accelerate pipeline development, close more deals, defend price points, etc.',
	b2b_3:
		'Up to {X} of B2B sales agreements completed without legal intervention by establishing a self-service process with smart guardrails.',
	b2b_4:
		'Up to {X} faster legal review and approvals for B2B sales agreements, freeing up {Y} annual hours to focus on more strategic negotiations, audits, etc.',
	b2b_5:
		'{X} estimated risk exposure reduction by ensuring B2B sales agreements only contain standard, pre approved clauses unless there’s a legal-approved exception.',
	b2b_6:
		'{X} estimated reduction in revenue leakage by ensuring obligations are enforced, fees are collected, and renewal events are maximised.',
	proc_1: '{X} faster vendor onboarding, going from weeks to just {Y} days.',
	proc_2:
		'{X} improvement in procurement staff productivity, freeing up {Y} annual hours to focus on priorities like vendor management and innovation.',
	proc_3:
		'Up to {X} of vendor agreements completed without legal intervention by establishing a self-service process with smart guardrails.',
	proc_4:
		'Up to {X} faster legal review and approvals for vendor agreements, freeing up {Y} annual hours to focus on more strategic negotiations, audits, etc.',
	proc_5:
		"{X} estimated risk exposure reduction by ensuring vendor agreements only contain standard, pre approved clauses unless there's a legal-approved exception.",
	proc_6:
		'{X} estimated reduction in savings leakage by ensuring obligations are enforced, rebates/penalties are collected, and renewals are maximised.',
	hr_1: '{X} faster candidate onboarding, going from weeks to just {Y} days.',
	hr_2: '{X} increase in conversion rates by reducing abandonment in the agreement process. Onboard {Y} additional candidates annually.',
	hr_3: '{X} improvement in staff productivity, freeing up {Y} annual hours for higher-value HR activities.',
	b2c_1:
		'{X} faster deals, with the potential to reduce the sales cycle from weeks to just {Y} days.',
	b2c_2:
		'{X} increase in conversion rates by reducing customer abandonment during the agreement process.',
	b2c_3:
		'{X} improvement in staff productivity, freeing up {Y} annual hours for higher-value activities.',
	up_to_1_1: 'Up to {X}',
	up_to_1_2: 'Dollars/Year',
	up_to_2_1: 'Up to {X}',
	up_to_2_2: 'Employee Hours/Year',
	up_to_3_1: 'Up to {X}',
	up_to_3_2: 'Onboarding Days/Vendor',
	up_to_4_1: 'Up to {X}',
	up_to_4_2: 'Onboarding Days/Candidate',
	up_to_5_1: 'Up to {X}',
	up_to_5_2: 'Onboarding Days/Customer',
	up_to_6_1: 'Up to {X}',
	up_to_6_2: 'Candidates/Year'
};

export const currency = 'GBP';
