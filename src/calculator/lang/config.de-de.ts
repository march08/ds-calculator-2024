import type { FlowConfig, LangTranslation } from '../types.js';

export const lang = 'en-gb';

export const flowConfig: FlowConfig = {
	calcConfigStep1: [
		{
			type: 'text',
			data: 'Ich arbeite in folgendem Bereich'
		},
		{
			type: 'select',
			data: {
				key: 'businessArea',
				placeholder: 'Ihr Bereich',
				multiselect: true,
				displayValueLowercase: false,
				options: [
					{
						title: 'Wählen Sie bis zu zwei Geschäftsprozesse aus'
					},
					{ key: 'B2B', label: 'B2B-Vertrieb' },
					{ key: 'PROC', label: 'Beschaffung' },
					{ key: 'HR', label: 'Personalwesen' },
					{ key: 'B2C', label: 'B2C-Vertrieb/CX' }
				]
			}
		},
		{
			type: 'text',
			data: 'für'
		},
		{
			type: 'select',
			data: {
				key: 'industry',
				placeholder: 'Ihre Branche',
				options: [
					{
						title: 'Wählen Sie Ihre Branche aus'
					},
					{ key: 'Automotive', label: 'Automobil' },
					{ key: 'Business Services', label: 'Geschäftsdienstleistungen' },
					{ key: 'Construction and Real Estate', label: 'Bauwesen und Immobilien' },
					{ key: 'Education', label: 'Ausbildung' },
					{ key: 'Energy', label: 'Energie' },
					{ key: 'Entertainment and Media', label: 'Unterhaltung und Medien' },
					{ key: 'Financial Services', label: 'Finanzdienstleistungen und Bankwesen' },
					{ key: 'Government', label: 'Regierung und öffentlicher Sektor' },
					{ key: 'Healthcare', label: 'Gesundheitswesen' },
					{ key: 'Hospitality', label: 'Gastgewerbe' },
					{ key: 'Manufacturing', label: 'Herstellung' },
					{
						key: 'Pharmaceuticals and Biotechnology',
						label: 'Pharmazie und Biotechnologie'
					},
					{ key: 'Retail', label: 'Einzelhandel' },
					{ key: 'Technology', label: 'Technologie' },
					{ key: 'Telecommunications', label: 'Telekommunikation' },
					{ key: 'Transportation and Logistics', label: 'Transport und Logistik' }
				]
			}
		}
	],
	calcConfigStep2b2b: [
		{
			type: 'text',
			data: 'Meine Organisation erzielt jedes Jahr'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_revenue',
				placeholder: 'Umsatz',
				options: [
					{
						title: 'Wählen Sie Ihren jährlichen B2B-Umsatz aus'
					},
					{
						key: '1000000',
						label: '1•Mio. € '
					},
					{
						key: '10000000',
						label: '10•Mio. € '
					},
					{
						key: '50000000',
						label: '50•Mio. € '
					},
					{
						key: '100000000',
						label: '100•Mio. € '
					},
					{
						key: '250000000',
						label: '250•Mio. € '
					},
					{
						key: '500000000',
						label: '500•Mio. € '
					},
					{
						key: '1000000000',
						label: '1•Mrd. € '
					},
					{
						key: '5000000000',
						label: '5•Mrd. € '
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
			data: 'und Prozesse'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_agreement_volume',
				placeholder: 'Vertragsvolumen',
				options: [
					{
						title: 'Wählen Sie Ihr jährliches B2B-Vertragsvolumen'
					},
					{
						key: '1000',
						label: '1,000•Verträge'
					},
					{
						key: '2500',
						label: '2,500•Verträge'
					},
					{
						key: '5000',
						label: '5,000•Verträge'
					},
					{
						key: '10000',
						label: '10,000•Verträge'
					},
					{
						key: '25000',
						label: '25,000•Verträge'
					},
					{
						key: '50000',
						label: '50,000•Verträge'
					},
					{
						key: '100000',
						label: '100,000•Verträge'
					},
					{
						key: '1000000',
						label: '1,000,000•Verträge'
					},
					{
						key: '10000000',
						label: '10,000,000•Verträge'
					}
				]
			}
		},
		{
			type: 'text',
			data: 'mit einem'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_process_complexity',
				placeholder: 'Prozesskomplexität',

				options: [
					{
						title: 'Wählen Sie die Komplexität des Vertragsprozesses aus'
					},
					{
						key: 'low',
						label: 'Prozess mit geringer Komplexität'
					},
					{
						key: 'medium',
						label: 'Prozess mittlerer Komplexität'
					},
					{
						key: 'high',
						label: 'Prozess mit hoher Komplexität'
					}
				]
			}
		}
	],
	calcConfigStep2hr: [
		{
			type: 'text',
			data: 'Meine Organisation hat'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_count',
				placeholder: 'Anzahl Beschäftigte',
				options: [
					{
						title: 'Wählen Sie die Anzahl Ihrer Beschäftigten aus'
					},
					{
						key: '1000',
						label: '1,000•Beschäftigte'
					},
					{
						key: '2500',
						label: '2,500•Beschäftigte'
					},
					{
						key: '5000',
						label: '5,000•Beschäftigte'
					},
					{
						key: '10000',
						label: '10,000•Beschäftigte'
					},
					{
						key: '25000',
						label: '25,000•Beschäftigte'
					},
					{
						key: '50000',
						label: '50,000•Beschäftigte'
					},
					{
						key: '100000',
						label: '100,000•Beschäftigte'
					},
					{
						key: '1000000',
						label: '1,000,000•Beschäftigte'
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
			data: 'und Prozesse'
		},
		{
			type: 'select',
			data: {
				key: 'HR_agreement_volume',
				placeholder: 'Vertragsvolumen Beschäftigte',
				options: [
					{
						title: 'Wählen Sie das jährliche Vertragsvolument für Beschäftigte aus'
					},
					{
						key: '1000',
						label: '1,000•Verträge/Jahr'
					},
					{
						key: '2500',
						label: '2,500•Verträge/Jahr'
					},
					{
						key: '5000',
						label: '5,000•Verträge/Jahr'
					},
					{
						key: '10000',
						label: '10,000•Verträge/Jahr'
					},
					{
						key: '25000',
						label: '25,000•Verträge/Jahr'
					},
					{
						key: '50000',
						label: '50,000•Verträge/Jahr'
					},
					{
						key: '100000',
						label: '100,000•Verträge/Jahr'
					},
					{
						key: '1000000',
						label: '1,000,000•Verträge/Jahr'
					},
					{
						key: '10000000',
						label: '10,000,000•Verträge/Jahr'
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
			data: 'vorwiegend für'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_type',
				placeholder: 'Art der Beschäftigung',
				options: [
					{
						title: 'Wählen Sie die häufigste Art der Beschäftigung aus '
					},
					{
						key: 'fulltime',
						label: 'Vollzeit-Beschäftigte'
					},
					{
						key: 'parttime',
						label: 'Saison-/Teilzeitkräfte'
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
						label: '1•Mio. € '
					},
					{
						key: '10000000',
						label: '10•Mio. € '
					},
					{
						key: '50000000',
						label: '50•Mio. € '
					},
					{
						key: '100000000',
						label: '100•Mio. € '
					},
					{
						key: '250000000',
						label: '250•Mio. € '
					},
					{
						key: '500000000',
						label: '500•Mio. € '
					},
					{
						key: '1000000000',
						label: '1•Mrd. € '
					},
					{
						key: '5000000000',
						label: '5•Mrd. € '
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
						label: '1,000•Verträge'
					},
					{
						key: '2500',
						label: '2,500•Verträge'
					},
					{
						key: '5000',
						label: '5,000•Verträge'
					},
					{
						key: '10000',
						label: '10,000•Verträge'
					},
					{
						key: '25000',
						label: '25,000•Verträge'
					},
					{
						key: '50000',
						label: '50,000•Verträge'
					},
					{
						key: '100000',
						label: '100,000•Verträge'
					},
					{
						key: '1000000',
						label: '1,000,000•Verträge'
					},
					{
						key: '10000000',
						label: '10,000,000•Verträge'
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
						label: '1•Mio. € '
					},
					{
						key: '10000000',
						label: '10•Mio. € '
					},
					{
						key: '50000000',
						label: '50•Mio. € '
					},
					{
						key: '100000000',
						label: '100•Mio. € '
					},
					{
						key: '250000000',
						label: '250•Mio. € '
					},
					{
						key: '500000000',
						label: '500•Mio. € '
					},
					{
						key: '1000000000',
						label: '1•Mrd. € '
					},
					{
						key: '5000000000',
						label: '5•Mrd. € '
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
						label: '1,000•Verträge'
					},
					{
						key: '2500',
						label: '2,500•Verträge'
					},
					{
						key: '5000',
						label: '5,000•Verträge'
					},
					{
						key: '10000',
						label: '10,000•Verträge'
					},
					{
						key: '25000',
						label: '25,000•Verträge'
					},
					{
						key: '50000',
						label: '50,000•Verträge'
					},
					{
						key: '100000',
						label: '100,000•Verträge'
					},
					{
						key: '1000000',
						label: '1,000,000•Verträge'
					},
					{
						key: '10000000',
						label: '10,000,000•Verträge'
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
			data: 'Schließlich möchte ich'
		},
		{
			type: 'select',
			data: {
				key: 'driver',
				placeholder: 'Prioritäten hinzufügen',
				multiselect: true,
				multiselectDelimiter: '; ',
				options: [
					{
						key: 'B2B',
						title: 'Wählen Sie Ihre Prioritäten für den B2B-Vertrieb aus'
					},
					{
						key: 'B2B_1_seller_productivity',
						label: 'Geschäftswachstum durch schnelleren und produktiveren Verkauf steigern'
					},
					{
						key: 'B2B_2_reduced_risk_exposure',
						label: 'Risikogefährdung durch Minderung von riskanten Klauseln'
					},
					{
						key: 'B2B_3_reduced_revenue_leakage',
						label: 'Vertragswert maximieren und Verluste begrenzen'
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
						label: 'Reduce risk exposure by•Mitigating risky clauses'
					},
					{
						key: 'PROC_4_max_value',
						label: 'Maximise value from spend and receive full benefits'
					},
					{
						key: 'HR',
						title: 'Wählen Sie Ihre Prioritäten für das Personalwesen aus'
					},
					{
						key: 'HR_1_faster_onboard',
						label: 'Schnelleres und einfacheres Onboarding von Neueinstellungen'
					},
					{ key: 'HR_2_attract_retain_talent', label: 'Top-Talente gewinnen und binden' },
					{
						key: 'HR_3_staff_productivity',
						label: 'Produktivität der Beschäftigten steigern, um Aufgabenbereiche zu erweitern'
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
	confirm_selection: 'Bestätigen Sie die Auswahl',
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
		'Up to {X} of B2B sales•Verträg completed without legal intervention by establishing a self-service process with smart guardrails.',
	b2b_4:
		'Up to {X} faster legal review and approvals for B2B sales•Verträg, freeing up {Y} annual hours to focus on more strategic negotiations, audits, etc.',
	b2b_5:
		'{X} estimated risk exposure reduction by ensuring B2B sales•Verträg only contain standard, pre approved clauses unless there’s a legal-approved exception.',
	b2b_6:
		'{X} estimated reduction in revenue leakage by ensuring obligations are enforced, fees are collected, and renewal events are maximised.',
	proc_1: '{X} faster vendor onboarding, going from weeks to just {Y} days.',
	proc_2:
		'{X} improvement in procurement staff productivity, freeing up {Y} annual hours to focus on priorities like vendor management and innovation.',
	proc_3:
		'Up to {X} of vendor•Verträg completed without legal intervention by establishing a self-service process with smart guardrails.',
	proc_4:
		'Up to {X} faster legal review and approvals for vendor•Verträg, freeing up {Y} annual hours to focus on more strategic negotiations, audits, etc.',
	proc_5:
		"{X} estimated risk exposure reduction by ensuring vendor•Verträg only contain standard, pre approved clauses unless there's a legal-approved exception.",
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
