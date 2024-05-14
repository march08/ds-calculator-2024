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
				multiselectLimit: 2,
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
						label: '1 Mio. € '
					},
					{
						key: '10000000',
						label: '10 Mio. € '
					},
					{
						key: '50000000',
						label: '50 Mio. € '
					},
					{
						key: '100000000',
						label: '100 Mio. € '
					},
					{
						key: '250000000',
						label: '250 Mio. € '
					},
					{
						key: '500000000',
						label: '500 Mio. € '
					},
					{
						key: '1000000000',
						label: '1 Mrd. € '
					},
					{
						key: '5000000000',
						label: '5 Mrd. € '
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
						label: '1,000 Verträge'
					},
					{
						key: '2500',
						label: '2,500 Verträge'
					},
					{
						key: '5000',
						label: '5,000 Verträge'
					},
					{
						key: '10000',
						label: '10,000 Verträge'
					},
					{
						key: '25000',
						label: '25,000 Verträge'
					},
					{
						key: '50000',
						label: '50,000 Verträge'
					},
					{
						key: '100000',
						label: '100,000 Verträge'
					},
					{
						key: '1000000',
						label: '1,000,000 Verträge'
					},
					{
						key: '10000000',
						label: '10,000,000 Verträge'
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
						label: '1,000 Beschäftigte'
					},
					{
						key: '2500',
						label: '2,500 Beschäftigte'
					},
					{
						key: '5000',
						label: '5,000 Beschäftigte'
					},
					{
						key: '10000',
						label: '10,000 Beschäftigte'
					},
					{
						key: '25000',
						label: '25,000 Beschäftigte'
					},
					{
						key: '50000',
						label: '50,000 Beschäftigte'
					},
					{
						key: '100000',
						label: '100,000 Beschäftigte'
					},
					{
						key: '1000000',
						label: '1,000,000 Beschäftigte'
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
						label: '1,000 Verträge/Jahr'
					},
					{
						key: '2500',
						label: '2,500 Verträge/Jahr'
					},
					{
						key: '5000',
						label: '5,000 Verträge/Jahr'
					},
					{
						key: '10000',
						label: '10,000 Verträge/Jahr'
					},
					{
						key: '25000',
						label: '25,000 Verträge/Jahr'
					},
					{
						key: '50000',
						label: '50,000 Verträge/Jahr'
					},
					{
						key: '100000',
						label: '100,000 Verträge/Jahr'
					},
					{
						key: '1000000',
						label: '1,000,000 Verträge/Jahr'
					},
					{
						key: '10000000',
						label: '10,000,000 Verträge/Jahr'
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
						label: 'Saison/Teilzeitkräfte'
					}
				]
			}
		}
	],
	calcConfigStep2procurement: [
		{
			type: 'text',
			data: 'Jedes Jahr gibt meine Organisation Folgendes aus'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_annual_spend',
				placeholder: 'Jährliche Ausgaben',

				options: [
					{
						title: 'Wählen Sie Ihre jährlichen Ausgaben aus'
					},
					{
						key: '1000000',
						label: '1 Mio. € '
					},
					{
						key: '10000000',
						label: '10 Mio. € '
					},
					{
						key: '50000000',
						label: '50 Mio. € '
					},
					{
						key: '100000000',
						label: '100 Mio. € '
					},
					{
						key: '250000000',
						label: '250 Mio. € '
					},
					{
						key: '500000000',
						label: '500 Mio. € '
					},
					{
						key: '1000000000',
						label: '1 Mrd. € '
					},
					{
						key: '5000000000',
						label: '5 Mrd. € '
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
			data: 'durch'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_spend_type',
				placeholder: 'Ausgabenart',
				options: [
					{
						title: 'Wählen Sie die Art Ihrer Ausgaben aus'
					},
					{
						key: 'direct',
						label: 'Direkte Ausgabe'
					},
					{
						key: 'indirect',
						label: 'Indirekte Ausgaben'
					},
					{
						key: 'capex',
						label: 'Investitionsausgaben'
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
			data: 'und schließt ab mit'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_agreement_volume',
				placeholder: 'Vertragsvolumen',
				options: [
					{
						title: 'Wählen Sie Ihr jährliches B2B-Vertragsvolumen'
					},
					{
						key: '1000',
						label: '1,000 Verträge'
					},
					{
						key: '2500',
						label: '2,500 Verträge'
					},
					{
						key: '5000',
						label: '5,000 Verträge'
					},
					{
						key: '10000',
						label: '10,000 Verträge'
					},
					{
						key: '25000',
						label: '25,000 Verträge'
					},
					{
						key: '50000',
						label: '50,000 Verträge'
					},
					{
						key: '100000',
						label: '100,000 Verträge'
					},
					{
						key: '1000000',
						label: '1,000,000 Verträge'
					},
					{
						key: '10000000',
						label: '10,000,000 Verträge'
					}
				]
			}
		}
	],
	calcConfigStep2b2c: [
		{
			type: 'text',
			data: 'Meine Organisation erzielt jedes Jahr'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_revenue',
				placeholder: 'Umsatz',
				options: [
					{
						title: 'Wählen Sie Ihren jährlichen B2B-Umsatz aus'
					},
					{
						key: '1000000',
						label: '1 Mio. € '
					},
					{
						key: '10000000',
						label: '10 Mio. € '
					},
					{
						key: '50000000',
						label: '50 Mio. € '
					},
					{
						key: '100000000',
						label: '100 Mio. € '
					},
					{
						key: '250000000',
						label: '250 Mio. € '
					},
					{
						key: '500000000',
						label: '500 Mio. € '
					},
					{
						key: '1000000000',
						label: '1 Mrd. € '
					},
					{
						key: '5000000000',
						label: '5 Mrd. € '
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
				key: 'B2C_agreement_volume',
				placeholder: 'Vertragsvolumen',
				options: [
					{
						title: 'Wählen Sie Ihr jährliches B2B-Vertragsvolumen aus'
					},
					{
						key: '1000',
						label: '1,000 Verträge'
					},
					{
						key: '2500',
						label: '2,500 Verträge'
					},
					{
						key: '5000',
						label: '5,000 Verträge'
					},
					{
						key: '10000',
						label: '10,000 Verträge'
					},
					{
						key: '25000',
						label: '25,000 Verträge'
					},
					{
						key: '50000',
						label: '50,000 Verträge'
					},
					{
						key: '100000',
						label: '100,000 Verträge'
					},
					{
						key: '1000000',
						label: '1,000,000 Verträge'
					},
					{
						key: '10000000',
						label: '10,000,000 Verträge'
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
			data: 'und erfasst vorwiegend'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_customer_information',
				placeholder: 'Kundeninformationen',
				options: [
					{
						title: 'Wählen Sie die am häufigsten erfassten Informationen aus'
					},
					{
						key: 'signature',
						label: 'Signatur/Zustimmung des Kunden'
					},
					{
						key: 'identity',
						label: 'Kundendaten und/oder Identitätsprüfung'
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
						title: 'Wählen Sie Ihre Prioritäten für Beschaffung aus'
					},
					{
						key: 'PROC_1_onboard_vendors',
						label: 'Schnelleres Onboarding von Anbietern, damit mein Team produktiver arbeiten kann'
					},
					{
						key: 'PROC_2_improved_productivity',
						label: 'Verbesserung der betrieblichen Effizienz zur Erhöhung der Kapazität'
					},
					{
						key: 'PROC_3_reduce_risk',
						label: 'Risiken durch Minderung riskanter Klauseln reduzieren'
					},
					{
						key: 'PROC_4_max_value',
						label: 'Ausgabenwert maximieren und von zusätzlichen Leistungen profitieren'
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
						title: 'Wählen Sie Ihre Prioritäten für den B2C-Vertrieb aus'
					},
					{
						key: 'B2C_1_onboard_customers',
						label: 'Schnelleres und einfacheres Onboarding von Kunden'
					},
					{ key: 'B2C_2_attract_retain', label: 'Mehr Kunden gewinnen und binden' },
					{
						key: 'B2C_3_boost_productivity',
						label:
							'Produktivität der Beschäftigten steigern, um Geschwindigkeit und Kapazität zu verbessern'
					}
				] as const
			}
		}
	]
} as const;

export const langConfig: LangTranslation = {
	confirm_selection: 'Bestätigen Sie die Auswahl',
	update_your_results: 'Aktualisieren Sie Ihre Ergebnisse',
	edit_your_assessment: 'Bearbeiten Sie Ihre Einstufung',
	title_days: 'tage'
};

export const resultText = {
	b2b_1:
		'{X} schnellere Abschlüsse, mit dem Potenzial, den Vertriebszyklus von Wochen auf nur {Y} Tage zu verkürzen.',
	b2b_2:
		'{X} produktivere Verkäuferinnen und Verkäufer schaffen zusätzliche {Y} Stunden jährlich zur Beschleunigung der Pipeline-Entwicklung, Mehr Geschäftsabschlüsse, wettbewerbsfähiger werden usw.',
	b2b_3:
		'Bis zu {X} der B2B-Kaufverträge können ohne die Rechtsabteilung abgeschlossen werden, da eine intelligente Selbsthilfe-Absicherung eingerichtet wird.',
	b2b_4:
		'Bis zu {X} schnellere rechtliche Überprüfung und Genehmigung von Kaufverträgen schaffen jährlich zusätzlich {Y} freie Stunden, um den Fokus auf strategisch wichtigere Verhandlungen, Audits usw. zu richten.',
	b2b_5:
		'{X} geschätzte Risikoreduzierung, indem sichergestellt wird, dass B2B-Kaufverträge nur vorab genehmigte Standardklauseln enthalten, sofern keine gesetzlich genehmigte Ausnahme vorliegt.',
	b2b_6:
		'{X1} bis {X2} geschätzte Verringerung von Umsatzeinbußen, indem sichergestellt wird, dass Verpflichtungen durchgesetzt, Gebühren eingezogen und Verlängerungsvorkommnisse maximiert werden.',
	proc_1: '{X} schnelleres Anbieter-Onboarding in nur {Y} Tagen anstatt von Wochen.',
	proc_2:
		'{X} Verbesserung der Produktivität des Beschaffungspersonals schafft jährlich zusätzlich {Y} freie Stunden, um den Fokus auf Prioritäten wie Anbietermanagement und Innovation zu richten.',
	proc_3:
		'Abschluss von {X} Anbieterverträgen ohne Einschaltung der Rechtsabteilung, da eine intelligente Selbsthilfe-Absicherung eingerichtet wird.',
	proc_4:
		'Bis zu {X} schnellere rechtliche Überprüfung und Genehmigung von Anbieterverträgen schaffen jährlich zusätzlich {Y} freie Stunden, um den Fokus auf strategisch wichtigere Verhandlungen, Audits usw. zu richten.',
	proc_5:
		'{X} geschätzte Risikoreduzierung, indem sichergestellt wird, dass Kaufverträge nur vorab genehmigte Standardklauseln enthalten, sofern keine gesetzlich genehmigte Ausnahme vorliegt.',
	proc_6:
		'{X} geschätzte Kosteneinsparung, indem sichergestellt wird, dass Verpflichtungen durchgesetzt, Preisnachlassungen/Geldstrafen eingehalten und Vertragserneuerungen maximiert werden.',
	hr_1: '{X} schnelleres Onboarding von Kandidaten in nur {Y} Tagen anstatt Wochen.',
	hr_2: '{X} Steigerung der Konversionsraten durch Reduzierung der Abbrüche im Vertragsabschlussprozess. Onboarding von {Y} weiteren Kandidaten jährlich.',
	hr_3: '{X} Verbesserung der Produktivität der Beschäftigten schafft {Y} freie Stunden pro Jahr, um den Fokus auf Aktivitäten in der Personalabteilung mit größerem Mehrwert zu richten.',
	b2c_1:
		'{X} schnellere Abschlüsse, mit dem Potenzial, den Vertriebszyklus auf nur {Y} Tage anstatt Wochen zu verkürzen.',
	b2c_2:
		'{X} Steigerung der Konversionsraten durch Reduzierung des Ausstiegs von Kunden im Vertragsabschlussprozess.',
	b2c_3:
		'{X} Verbesserung der Produktivität der Beschäftigen schafft zusätzliche {Y} Stunden pro Jahr für höherwertige Aktivitäten.',
	up_to_1_1: 'Bis zu {X}',
	up_to_1_2: 'Euro/Jahr',
	up_to_2_1: 'Bis zu {X}',
	up_to_2_2: 'Arbeitsstunden/Jahr',
	up_to_3_1: 'Bis zu {X}',
	up_to_3_2: 'Onboarding-Tage/Anbieter',
	up_to_4_1: 'Bis zu {X}',
	up_to_4_2: 'Onboarding-Tage/Kandidaten',
	up_to_5_1: 'Bis zu {X}',
	up_to_5_2: 'Onboarding-Tage/Kunde',
	up_to_6_1: 'Bis zu {X}',
	up_to_6_2: 'Kandidaten/Jahr'
};

export const currency = 'EUR';
