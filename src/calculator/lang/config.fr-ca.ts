import type { FlowConfig, LangTranslation } from '../types.js';

export const flowConfig: FlowConfig = {
	calcConfigStep1: [
		{
			type: 'text',
			data: 'Ma profession:'
		},
		{
			type: 'select',
			data: {
				key: 'businessArea',
				placeholder: 'Votre domaine',
				multiselect: true,
				multiselectLimit: 2,
				displayValueLowercase: false,
				options: [
					{
						title: "Sélectionnez jusqu'à deux processus d'entreprise"
					},
					{ key: 'B2B', label: 'Ventes B2B' },
					{ key: 'PROC', label: 'Achats' },
					{ key: 'HR', label: 'RH' },
					{ key: 'B2C', label: 'Ventes B2C/Expérience client' }
				]
			}
		},
		{
			type: 'text',
			data: 'pour'
		},
		{
			type: 'select',
			data: {
				key: 'industry',
				placeholder: "Votre secteur d'activité",
				options: [
					{
						title: "Sélectionnez votre secteur d'activité"
					},
					{ key: 'Automotive', label: 'automobile' },
					{ key: 'Business Services', label: 'services aux entreprises' },
					{ key: 'Construction and Real Estate', label: 'construction et immobilier' },
					{ key: 'Education', label: 'éducation' },
					{ key: 'Energy', label: 'énergie' },
					{ key: 'Entertainment and Media', label: 'divertissement et médias' },
					{ key: 'Financial Services', label: 'services financiers et services bancaires' },
					{ key: 'Government', label: 'secteur public et services gouvernementaux' },
					{ key: 'Healthcare', label: 'soins de santé' },
					{ key: 'Hospitality', label: 'hôtellerie' },
					{ key: 'Manufacturing', label: 'production' },
					{
						key: 'Pharmaceuticals and Biotechnology',
						label: 'pharmaceutique et biotechnologie'
					},
					{ key: 'Retail', label: 'vente au détail' },
					{ key: 'Technology', label: 'technologies' },
					{ key: 'Telecommunications', label: 'télécommunications' },
					{ key: 'Transportation and Logistics', label: 'transport et logistique' }
				]
			}
		}
	],
	calcConfigStep2b2b: [
		{
			type: 'text',
			data: 'Chaque année, mon organisation obtient'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_revenue',
				placeholder: "Chiffre d'affaires",
				options: [
					{
						title: "Sélectionnez votre chiffre d'affaires annuel sur les ventes B2B"
					},
					{
						key: '1000000',
						label: '1 million de dollars'
					},
					{
						key: '10000000',
						label: '10 millions de dollars'
					},
					{
						key: '50000000',
						label: '50 millions de dollars'
					},
					{
						key: '100000000',
						label: '100 millions de dollars'
					},
					{
						key: '250000000',
						label: '250 millions de dollars'
					},
					{
						key: '500000000',
						label: '500 millions de dollars'
					},
					{
						key: '1000000000',
						label: '1 milliard de dollars'
					},
					{
						key: '5000000000',
						label: '5 milliards de dollars'
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
			data: 'et des processus'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_agreement_volume',
				placeholder: "Volume d'accords",
				options: [
					{
						title: "Sélectionnez le volume annuel d'accords B2B"
					},
					{
						key: '1000',
						label: '1 000 accords'
					},
					{
						key: '2500',
						label: '2,500 accords'
					},
					{
						key: '5000',
						label: '5 000 accords'
					},
					{
						key: '10000',
						label: '10 000 accords'
					},
					{
						key: '25000',
						label: '25 000 accords'
					},
					{
						key: '50000',
						label: '50 000 accords'
					},
					{
						key: '100000',
						label: '100 000 accords'
					},
					{
						key: '1000000',
						label: '1 000 000 accords'
					},
					{
						key: '10000000',
						label: '10 000 000 accords'
					}
				]
			}
		},
		{
			type: 'text',
			data: "à l'aide d'un"
		},
		{
			type: 'select',
			data: {
				key: 'B2B_process_complexity',
				placeholder: 'Complexité des processus',

				options: [
					{
						title: 'Sélectionnez la complexité du processus d’accord'
					},
					{
						key: 'low',
						label: 'processus peu complexe'
					},
					{
						key: 'medium',
						label: 'processus moyennement complexe'
					},
					{
						key: 'high',
						label: 'processus très complexe'
					}
				]
			}
		}
	],
	calcConfigStep2hr: [
		{
			type: 'text',
			data: 'Mon organisation dispose de'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_count',
				placeholder: "Nombre d'employés",
				options: [
					{
						title: "Sélectionnez le nombre d'employés dans votre entreprise"
					},
					{
						key: '1000',
						label: '1 000 employés'
					},
					{
						key: '2500',
						label: '2 500 employés'
					},
					{
						key: '5000',
						label: '5 000 employés'
					},
					{
						key: '10000',
						label: '10 000 employés'
					},
					{
						key: '25000',
						label: '25 000 employés'
					},
					{
						key: '50000',
						label: '50 000 employés'
					},
					{
						key: '100000',
						label: '100 000 employés'
					},
					{
						key: '1000000',
						label: '1 000 000 employés'
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
			data: 'et des processus'
		},
		{
			type: 'select',
			data: {
				key: 'HR_agreement_volume',
				placeholder: 'Volume des accords conclus avec les employés',
				options: [
					{
						title: "Sélectionnez le volume annuel d'accords conclus avec vos employés"
					},
					{
						key: '1000',
						label: '1 000 accords'
					},
					{
						key: '2500',
						label: '2,500 accords'
					},
					{
						key: '5000',
						label: '5 000 accords'
					},
					{
						key: '10000',
						label: '10 000 accords'
					},
					{
						key: '25000',
						label: '25 000 accords'
					},
					{
						key: '50000',
						label: '50 000 accords'
					},
					{
						key: '100000',
						label: '100 000 accords'
					},
					{
						key: '1000000',
						label: '1 000 000 accords'
					},
					{
						key: '10000000',
						label: '10 000 000 accords'
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
			data: 'principalement pour'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_type',
				placeholder: "Type d'employés",
				options: [
					{
						title: "Sélectionnez le type d'employés le plus courant"
					},
					{
						key: 'fulltime',
						label: 'employés à temps plein'
					},
					{
						key: 'parttime',
						label: 'employés saisonniers et à temps partiel'
					}
				]
			}
		}
	],
	calcConfigStep2procurement: [
		{
			type: 'text',
			data: 'Chaque année, mon organisation dépense'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_annual_spend',
				placeholder: 'Dépenses annuelles',

				options: [
					{
						title: 'Sélectionnez vos dépenses annuelles'
					},
					{
						key: '1000000',
						label: '1 million de dollars'
					},
					{
						key: '10000000',
						label: '10 millions de dollars'
					},
					{
						key: '50000000',
						label: '50 millions de dollars'
					},
					{
						key: '100000000',
						label: '100 millions de dollars'
					},
					{
						key: '250000000',
						label: '250 millions de dollars'
					},
					{
						key: '500000000',
						label: '500 millions de dollars'
					},
					{
						key: '1000000000',
						label: '1 milliard de dollars'
					},
					{
						key: '5000000000',
						label: '5 milliards de dollars'
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
			data: 'grâce à'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_spend_type',
				placeholder: 'Type de dépenses',
				options: [
					{
						title: 'Sélectionnez le type de dépenses'
					},
					{
						key: 'direct',
						label: 'dépenses directes'
					},
					{
						key: 'indirect',
						label: 'dépenses indirectes'
					},
					{
						key: 'capex',
						label: 'dépenses CapEx'
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
			data: 'et a conclu'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_agreement_volume',
				placeholder: "Volume d'accords",
				options: [
					{
						title: "Sélectionnez le volume annuel d'accords d'achats conclus"
					},
					{
						key: '1000',
						label: '1 000 accords'
					},
					{
						key: '2500',
						label: '2,500 accords'
					},
					{
						key: '5000',
						label: '5 000 accords'
					},
					{
						key: '10000',
						label: '10 000 accords'
					},
					{
						key: '25000',
						label: '25 000 accords'
					},
					{
						key: '50000',
						label: '50 000 accords'
					},
					{
						key: '100000',
						label: '100 000 accords'
					},
					{
						key: '1000000',
						label: '1 000 000 accords'
					},
					{
						key: '10000000',
						label: '10 000 000 accords'
					}
				]
			}
		}
	],
	calcConfigStep2b2c: [
		{
			type: 'text',
			data: 'Chaque année, mon organisation obtient'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_revenue',
				placeholder: "Chiffre d'affaires",
				options: [
					{
						title: "Sélectionnez votre chiffre d'affaires annuel sur les ventes B2C"
					},
					{
						key: '1000000',
						label: '1 million de dollars'
					},
					{
						key: '10000000',
						label: '10 millions de dollars'
					},
					{
						key: '50000000',
						label: '50 millions de dollars'
					},
					{
						key: '100000000',
						label: '100 millions de dollars'
					},
					{
						key: '250000000',
						label: '250 millions de dollars'
					},
					{
						key: '500000000',
						label: '500 millions de dollars'
					},
					{
						key: '1000000000',
						label: '1 milliard de dollars'
					},
					{
						key: '5000000000',
						label: '5 milliards de dollars'
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
			data: 'et des processus'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_agreement_volume',
				placeholder: "Volume d'accords",
				options: [
					{
						title: "Sélectionnez le volume annuel d'accords B2C"
					},
					{
						key: '1000',
						label: '1 000 accords'
					},
					{
						key: '2500',
						label: '2,500 accords'
					},
					{
						key: '5000',
						label: '5 000 accords'
					},
					{
						key: '10000',
						label: '10 000 accords'
					},
					{
						key: '25000',
						label: '25 000 accords'
					},
					{
						key: '50000',
						label: '50 000 accords'
					},
					{
						key: '100000',
						label: '100 000 accords'
					},
					{
						key: '1000000',
						label: '1 000 000 accords'
					},
					{
						key: '10000000',
						label: '10 000 000 accords'
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
			data: 'en recueillant principalement'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_customer_information',
				placeholder: 'Renseignements sur les clients',
				options: [
					{
						title: 'Sélectionnez les informations les plus couramment recueillies'
					},
					{
						key: 'signature',
						label: 'signature/consentement du client'
					},
					{
						key: 'identity',
						label: 'données client et/ou vérification d’identité'
					}
				]
			}
		}
	],
	calcConfigLast: [
		{
			type: 'text',
			data: 'Enfin, je souhaite'
		},
		{
			type: 'select',
			data: {
				key: 'driver',
				placeholder: 'Ajout de priorités',
				multiselect: true,
				multiselectDelimiter: '; ',
				options: [
					{
						key: 'B2B',
						title: 'Sélectionnez vos priorités en matière de ventes B2B'
					},
					{
						key: 'B2B_1_seller_productivity',
						label:
							'stimuler la croissance de l’entreprise avec des ventes plus rapides et plus productives'
					},
					{
						key: 'B2B_2_reduced_risk_exposure',
						label: 'réduire l’exposition aux risques en limitant les clauses à risque'
					},
					{
						key: 'B2B_3_reduced_revenue_leakage',
						label: 'maximiser la valeur des accords et limiter les fuites'
					},
					{
						key: 'PROC',
						title: 'Sélectionnez vos priorités en matière de gestion des achats'
					},
					{
						key: 'PROC_1_onboard_vendors',
						label:
							'intégrez des fournisseurs plus rapidement pour que mon équipe soit plus productive'
					},
					{
						key: 'PROC_2_improved_productivity',
						label: 'améliorer l’efficacité opérationnelle'
					},
					{
						key: 'PROC_3_reduce_risk',
						label: 'réduire l’exposition aux risques en atténuant les clauses à risque'
					},
					{
						key: 'PROC_4_max_value',
						label: "maximiser le retour sur investissement et faire le plein d'avantages"
					},
					{
						key: 'HR',
						title: 'Sélectionnez vos priorités en matière de gestion RH'
					},
					{
						key: 'HR_1_faster_onboard',
						label: 'intégrer de nouvelles recrues plus rapidement et plus facilement'
					},
					{ key: 'HR_2_attract_retain_talent', label: 'attirer et retenir les meilleurs talents' },
					{
						key: 'HR_3_staff_productivity',
						label: 'accroître la productivité du personnel afin d’élargir la portée'
					},
					{
						key: 'B2C',
						title: 'Sélectionnez vos priorités en matière de ventes B2C'
					},
					{
						key: 'B2C_1_onboard_customers',
						label: 'intégrer de nouveaux clients plus rapidement et plus facilement'
					},
					{ key: 'B2C_2_attract_retain', label: 'attirer et retenir les meilleurs clients' },
					{
						key: 'B2C_3_boost_productivity',
						label:
							'accroître la productivité du personnel afin d’améliorer le rendement et les capacités'
					}
				] as const
			}
		}
	]
} as const;

export const langConfig: LangTranslation = {
	confirm_selection: 'Confirmer la sélection',
	update_your_results: 'Mettre à jour vos résultats',
	edit_your_assessment: 'Modifiez votre évaluation',
	title_days: 'jours'
};
export const resultText = {
	b2b_1:
		"Des ententes conclues entre {X} plus rapidement, avec la possibilité d'écourter le cycle de vente de plusieurs semaines à seulement {Y} jours.",
	b2b_2:
		"Des vendeurs entre {X1} et {X2} plus productifs, ce qui permet de libérer jusqu'à {Y} heures pour accélérer la croissance de la filière, conclure plus d'ententes, négocier les prix, etc.",
	b2b_3:
		"Jusqu'à {X} des contrats de vente B2B conclus sans intervention d'un service juridique en mettant en place un processus en libre-service avec des garde-fous intelligents.",
	b2b_4:
		"Des vérifications juridiques et des approbations jusqu'à {X} plus rapides pour les contrats de vente B2B, ce qui libère {Y} heures annuelles, qui peuvent notamment être consacrées à des négociations plus stratégiques et à des audits.",
	b2b_5:
		"Réduction estimée à {X} de l'exposition aux risques en veillant à ce que les contrats de vente B2B contiennent uniquement des clauses standard pré-approuvées, sauf exception approuvée par le service juridique.",
	b2b_6:
		"Entre {X1} et {X2} environ de pertes de revenus en moins en s'assurant que les obligations sont respectées, que les taxes sont perçues et que les renouvellements sont maximisés.",

	proc_1:
		'Intégration des fournisseurs entre {X} plus rapide, passant de plusieurs semaines à seulement {Y} jours.',
	proc_2:
		"Entre {X1} et {X2} d'amélioration de la productivité du personnel chargé des achats, ce qui libère {Y} heures annuelles, qui peuvent être consacrées à des priorités telles que la gestion des fournisseurs et l'innovation.",
	proc_3:
		"Jusqu'à {X} des accords de fournisseurs conclus sans intervention d'un service juridique en mettant en place un processus en libre-service avec des garde-fous intelligents.",
	proc_4:
		'Des vérifications juridiques et des approbations jusquà {X} plus rapides pour les accords de fournisseurs, ce qui libère {Y} heures annuelles, qui peuvent notamment être consacrées à des négociations plus stratégiques et à des audits.',
	proc_5:
		"Réduction estimée à {X} de l'exposition aux risques en veillant à ce que les accords de fournisseurs contiennent uniquement des clauses standard pré-approuvées, sauf exception approuvée par le service juridique.",
	proc_6:
		"Entre {X1} et {X2} environ de pertes d'économies en moins en s'assurant que les obligations sont respectées, que les remises et les pénalités sont perçues et que les renouvellements sont maximisés.",
	hr_1: 'Intégration des fournisseurs entre {X} plus rapide, passant de plusieurs semaines à seulement {Y} jours.',
	hr_2: "Augmentation de {X1} à {X2} des taux de conversion en réduisant l'abandon dans le processus d'accord. Intégrez entre YY et {Y} candidats supplémentaires chaque année.",
	hr_3: 'Amélioration de {X1} à {X2} de la productivité du personnel, ce qui permet de libérer {Y} heures chaque année pour des activités RH à plus forte valeur ajoutée. ',
	b2c_1:
		"Des ententes conclues entre {X} plus rapidement, avec la possibilité d'écourter le cycle de vente de plusieurs semaines à seulement {Y} jours.",
	b2c_2:
		"Augmentation de {X1} à {X2} des taux de conversion en réduisant l'abandon des clients au cours du processus d'accord.",
	b2c_3:
		'Amélioration de {X1} à {X2} de la productivité du personnel, ce qui permet de libérer {Y} heures chaque année pour des activités à plus forte valeur ajoutée.',
	up_to_1_1: 'Jusqu’à {X}',
	up_to_1_2: 'dollars/an',
	up_to_2_1: 'Jusqu’à {X}',
	up_to_2_2: 'heures de travail par an',
	up_to_3_1: 'Jusqu’à {X}',
	up_to_3_2: 'jours d’intégration/fournisseur ',
	up_to_4_1: 'Jusqu’à {X}',
	up_to_4_2: 'jours d’intégration/candidat',
	up_to_5_1: 'Jusqu’à {X}',
	up_to_5_2: 'jours d’intégration/client',
	up_to_6_1: 'Jusqu’à {X}',
	up_to_6_2: 'candidats/an'
};

export const currency = 'CAD';
export const lang = 'fr-ca';
