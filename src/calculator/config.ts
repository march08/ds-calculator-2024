import type { StepConfig } from './types.js';

const getStep3Options = (area: string) => {
	switch (area) {
		case 'B2B':
			return [
				{
					key: 'Drive business growth from faster, more productive selling',
					label: 'Drive business growth from faster, more productive selling'
				},
				{
					key: 'Reduce risk exposure by mitigating risky clauses',
					label: 'Reduce risk exposure by mitigating risky clauses'
				},
				{
					key: 'Maximize agreement value and limit leakage',
					label: 'Maximize agreement value and limit leakage'
				}
			];
		case 'B2C':
			return [
				{
					key: 'Onboard vendors faster to access goods and services sooner',
					label: 'Onboard vendors faster to access goods and services sooner'
				},
				{
					key: 'Improve operational efficiency to increase capacity',
					label: 'Improve operational efficiency to increase capacity'
				},
				{
					key: 'Reduce risk exposure by mitigating risky clauses',
					label: 'Reduce risk exposure by mitigating risky clauses'
				},
				{
					key: 'Maximize value from spend and receive full benefits',
					label: 'Maximize value from spend and receive full benefits'
				}
			];
		case 'HR':
			return [
				{
					key: 'Onboard new hires faster and easier',
					label: 'Onboard new hires faster and easier'
				},
				{ key: 'Attract and retain top talent', label: 'Attract and retain top talent' },
				{
					key: 'Increase staff productivity to expand scope',
					label: 'Increase staff productivity to expand scope'
				}
			];
		case 'Procurement':
			return [
				{
					key: 'Onboard customers faster and easier',
					label: 'Onboard customers faster and easier'
				},
				{ key: 'Attract and retain more customers', label: 'Attract and retain more customers' },
				{
					key: 'Boost staff productivity to improve speed and capacity',
					label: 'Boost staff productivity to improve speed and capacity'
				}
			];
		default:
			return [];
	}
};

export const flowConfig: {
	calcConfigStep1: StepConfig;
	calcConfigStep2b2b: StepConfig;
	calcConfigStep2hr: StepConfig;
	getCalcConfigStep3: (areas: string[]) => StepConfig;
} = {
	calcConfigStep1: [
		{
			type: 'text',
			data: 'I work in'
		},
		{
			type: 'select',
			data: {
				key: 'businessArea',
				placeholder: 'Your area',
				title: 'Select your Business Process',
				multiselect: true,
				options: [
					{ key: 'B2B', label: 'B2B' },
					{ key: 'Procurement', label: 'Procurement' },
					{ key: 'HR', label: 'HR' },
					{ key: 'B2C', label: 'B2C' }
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
				placeholder: 'Your industry',
				title: 'Select your Industry',
				options: [
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
				key: 'b2b_revenue',
				placeholder: 'Revenue',
				title: 'Select your annual B2B revenue',
				options: [
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
			data: ', and processes'
		},
		{
			type: 'select',
			data: {
				key: 'b2b_agreement_volume',
				placeholder: 'Agreement volume',
				title: 'Select your yearly B2B agreement volume',
				options: [
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
				key: 'b2b_process_complexity',
				placeholder: 'Process Complexity',
				title: 'Select agreement process complexity',
				options: [
					{
						key: 'low complexity process',
						label: 'low complexity process'
					},
					{
						key: 'medium complexity process',
						label: 'medium complexity process'
					},
					{
						key: 'high complexity process',
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
				key: 'hr_employee_count',
				placeholder: 'Employee count',
				title: 'Select your employee count',
				options: [
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
			data: ', and processes'
		},
		{
			type: 'select',
			data: {
				key: 'hr_agreement_volume',
				placeholder: 'Employee Agreement Volume',
				title: 'Select yearly employee agreement volume',
				options: [
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
			data: ', mostly for'
		},
		{
			type: 'select',
			data: {
				key: 'hr_employee_type',
				placeholder: 'Employee Type',
				title: 'Select most common employee type',
				options: [
					{
						key: 'full-time employees',
						label: 'full-time employees'
					},
					{
						key: 'seasonal/part-time employees',
						label: 'seasonal/part-time employees'
					}
				]
			}
		}
	],

	getCalcConfigStep3: (areas) => {
		return [
			{
				type: 'text',
				data: 'Lastly, I want to'
			},
			{
				type: 'select',
				data: {
					key: 'priorities',
					placeholder: 'Your priorities',
					title: 'Select your Priorities for b2b Sales',
					multiselect: true,
					multiselectDelimiter: '; ',
					options: areas.map((area) => getStep3Options(area)).flat()
				}
			}
		];
	}
};
