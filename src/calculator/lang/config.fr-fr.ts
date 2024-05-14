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
				placeholder: 'Votre secteur',
				multiselect: true,
				displayValueLowercase: false,
				options: [
					{
						title: 'Sélectionnez jusqu’à deux processus métier'
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
					{ key: 'Education', label: 'enseignement' },
					{ key: 'Energy', label: 'énergie' },
					{ key: 'Entertainment and Media', label: 'divertissement et médias' },
					{ key: 'Financial Services', label: 'services financiers et bancaires' },
					{ key: 'Government', label: 'secteur public' },
					{ key: 'Healthcare', label: 'santé' },
					{ key: 'Hospitality', label: 'hôtellerie' },
					{ key: 'Manufacturing', label: 'production industrielle' },
					{
						key: 'Pharmaceuticals and Biotechnology',
						label: 'pharmaceutique et biotechnologie'
					},
					{ key: 'Retail', label: 'vente au détail' },
					{ key: 'Technology', label: 'technologie' },
					{ key: 'Telecommunications', label: 'télécommunications' },
					{ key: 'Transportation and Logistics', label: 'transport et logistique' }
				]
			}
		}
	],
	calcConfigStep2b2b: [
		{
			type: 'text',
			data: 'Mon organisation a un chiffre d’affaires annuel de'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_revenue',
				placeholder: "Chiffre d'affaires",
				options: [
					{
						title: 'Sélectionnez votre chiffre d’affaires B2B annuel'
					},
					{
						key: '1000000',
						label: ' 1 million €'
					},
					{
						key: '10000000',
						label: '10 millions €'
					},
					{
						key: '50000000',
						label: '50 millions €'
					},
					{
						key: '100000000',
						label: '100 millions €'
					},
					{
						key: '250000000',
						label: '250 millions €'
					},
					{
						key: '500000000',
						label: '500 millions €'
					},
					{
						key: '1000000000',
						label: '1 milliard €'
					},
					{
						key: '5000000000',
						label: '5 milliards €'
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
			data: 'et traite'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_agreement_volume',
				placeholder: "Nombre d'accords",
				options: [
					{
						title: 'Sélectionnez votre nombre d’accords B2B annuel'
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
			data: 'en utilisant un'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_process_complexity',
				placeholder: 'Complexité du processus',

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
			data: 'Mon organisation compte'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_count',
				placeholder: "Nombre d'employés",
				options: [
					{
						title: 'Sélectionnez le nombre d’employés'
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
			data: 'et traite'
		},
		{
			type: 'select',
			data: {
				key: 'HR_agreement_volume',
				placeholder: 'Nombre d’accords avec des employés',
				options: [
					{
						title: 'Sélectionnez votre nombre d’accords annuel avec des employés'
					},
					{
						key: '1000',
						label: '1 000 accords par an'
					},
					{
						key: '2500',
						label: '2,500 accords par an'
					},
					{
						key: '5000',
						label: '5 000 accords par an'
					},
					{
						key: '10000',
						label: '10 000 accords par an'
					},
					{
						key: '25000',
						label: '25 000 accords par an'
					},
					{
						key: '50000',
						label: '50 000 accords par an'
					},
					{
						key: '100000',
						label: '100 000 accords par an'
					},
					{
						key: '1000000',
						label: '1 000 000 accords par an'
					},
					{
						key: '10000000',
						label: '10 000 000 accords par an'
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
			data: 'principalement pour des'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_type',
				placeholder: "Type d'employé",
				options: [
					{
						title: 'Sélectionnez le type d’employé le plus courant'
					},
					{
						key: 'fulltime',
						label: 'Employés à temps plein'
					},
					{
						key: 'parttime',
						label: 'Employés saisonniers/à temps partiel'
					}
				]
			}
		}
	],
	calcConfigStep2procurement: [
		{
			type: 'text',
			data: 'Mon organisation dépense tous les ans'
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
						label: ' 1 million €'
					},
					{
						key: '10000000',
						label: '10 millions €'
					},
					{
						key: '50000000',
						label: '50 millions €'
					},
					{
						key: '100000000',
						label: '100 millions €'
					},
					{
						key: '250000000',
						label: '250 millions €'
					},
					{
						key: '500000000',
						label: '500 millions €'
					},
					{
						key: '1000000000',
						label: '1 milliard €'
					},
					{
						key: '5000000000',
						label: '5 milliards €'
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
			data: 'en'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_spend_type',
				placeholder: 'Type de dépenses',
				options: [
					{
						title: 'Sélectionnez votre type de dépense'
					},
					{
						key: 'direct',
						label: 'Dépenses directes'
					},
					{
						key: 'indirect',
						label: 'Dépenses indirectes'
					},
					{
						key: 'capex',
						label: 'Dépenses d’investissement'
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
			data: 'et conclut'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_agreement_volume',
				placeholder: "Nombre d'accords",
				options: [
					{
						title: 'Sélectionnez votre nombre d’accords annuel pour les achats'
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
			data: 'Mon organisation a un chiffre d’affaires annuel de'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_revenue',
				placeholder: "Chiffre d'affaires",
				options: [
					{
						title: 'Sélectionnez votre chiffre d’affaires B2C annuel'
					},
					{
						key: '1000000',
						label: ' 1 million €'
					},
					{
						key: '10000000',
						label: '10 millions €'
					},
					{
						key: '50000000',
						label: '50 millions €'
					},
					{
						key: '100000000',
						label: '100 millions €'
					},
					{
						key: '250000000',
						label: '250 millions €'
					},
					{
						key: '500000000',
						label: '500 millions €'
					},
					{
						key: '1000000000',
						label: '1 milliard €'
					},
					{
						key: '5000000000',
						label: '5 milliards €'
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
			data: 'et traite'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_agreement_volume',
				placeholder: "Nombre d'accords",
				options: [
					{
						title: 'Sélectionnez votre nombre d’accords annuel B2C'
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
			data: 'recueillant principalement'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_customer_information',
				placeholder: 'Informations sur le client',
				options: [
					{
						title: 'Sélectionnez les informations les plus recueillies'
					},
					{
						key: 'signature',
						label: 'La signature ou le consentement du client'
					},
					{
						key: 'identity',
						label: 'Les données clients et/ou la vérification de l’identité'
					}
				]
			}
		}
	],
	calcConfigLast: [
		{
			type: 'text',
			data: 'Pour finir, je souhaite'
		},
		{
			type: 'select',
			data: {
				key: 'driver',
				placeholder: 'Ajouter des priorités',
				multiselect: true,
				multiselectDelimiter: '; ',
				options: [
					{
						key: 'B2B',
						title: 'Sélectionnez vos priorités pour les ventes B2B'
					},
					{
						key: 'B2B_1_seller_productivity',
						label:
							'Booster la croissance de mon entreprise avec des ventes plus rapides et plus productives'
					},
					{
						key: 'B2B_2_reduced_risk_exposure',
						label: 'Réduire l’exposition aux risques en limitant les clauses à risque'
					},
					{
						key: 'B2B_3_reduced_revenue_leakage',
						label: 'Optimiser la valeur des accords et limiter les pertes'
					},
					{
						key: 'PROC',
						title: 'Sélectionnez vos priorités en matière d’achats'
					},
					{
						key: 'PROC_1_onboard_vendors',
						label:
							'Intégrer les fournisseurs plus rapidement pour que mon équipe soit plus productive'
					},
					{
						key: 'PROC_2_improved_productivity',
						label: 'Améliorer l’efficacité opérationnelle pour augmenter la capacité'
					},
					{
						key: 'PROC_3_reduce_risk',
						label: 'Réduire l’exposition aux risques en limitant les clauses à risque'
					},
					{
						key: 'PROC_4_max_value',
						label:
							'Optimiser la valeur obtenue grâce aux dépenses et bénéficier de tous les avantages'
					},
					{
						key: 'HR',
						title: 'Sélectionnez vos priorités pour les RH'
					},
					{
						key: 'HR_1_faster_onboard',
						label: 'Intégrer les nouveaux collaborateurs plus rapidement et plus facilement'
					},
					{
						key: 'HR_2_attract_retain_talent',
						label: 'Attirer et conserver les meilleurs talents'
					},
					{
						key: 'HR_3_staff_productivity',
						label: 'Améliorer la productivité du personnel afin d’élargir notre champ d’action'
					},
					{
						key: 'B2C',
						title: 'Sélectionnez vos priorités pour les ventes B2C'
					},
					{
						key: 'B2C_1_onboard_customers',
						label: 'Intégrer les clients plus rapidement et plus facilement'
					},
					{ key: 'B2C_2_attract_retain', label: 'Attirer et conserver plus de clients' },
					{
						key: 'B2C_3_boost_productivity',
						label: 'Booster la productivité du personnel afin d’améliorer la vitesse et la capacité'
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
		'Des contrats conclus entre {X1} et {X2} plus rapidement, avec la possibilité de réduire le cycle de ventes de plusieurs semaines à une période comprise entre {Y} jours seulement.',
	b2b_2:
		'Des vendeurs entre {X1} et {X2} plus productifs, ce qui libère tous les ans entre {Y} heures pour notamment accélérer le développement du pipeline, conclure plus de contrats et défendre les niveaux de prix.',
	b2b_3:
		'Jusqu’à {X} des contrats de vente B2B conclus sans intervention d’un service juridique en mettant en place un processus en libre-service avec des garde-fous intelligents.',
	b2b_4:
		'Des vérifications juridiques et des approbations jusqu’à {X} plus rapides pour les contrats de vente B2B, ce qui libère {Y} heures annuelles, qui peuvent notamment être consacrées à des négociations plus stratégiques et à des audits.',
	b2b_5:
		'Réduction estimée à {X} de l’exposition aux risques en veillant à ce que les contrats de vente B2B contiennent uniquement des clauses standard pré-approuvées, sauf exception approuvée par le service juridique.',
	b2b_6:
		'Réduction des pertes de revenus estimée entre {X1} et {X2} en veillant à ce que les obligations soient respectées, que les frais soient perçus et que les événements de renouvellement soient optimisés.',
	proc_1:
		'Intégration des fournisseurs entre {X} plus rapide, passant de plusieurs semaines à une période comprise entre {Y} jours seulement.',
	proc_2:
		'Entre {X1} et {X2} d’amélioration de la productivité du personnel chargé des achats, ce qui libère {Y} heures annuelles, qui peuvent être consacrées à des priorités telles que la gestion des fournisseurs et l’innovation.',
	proc_3:
		'Jusqu’à {X} des accords de fournisseurs conclus sans intervention d’un service juridique en mettant en place un processus en libre-service avec des garde-fous intelligents.',
	proc_4:
		'Des vérifications juridiques et des approbations jusqu’à {X} plus rapides pour les accords de fournisseurs, ce qui libère {Y} heures annuelles, qui peuvent notamment être consacrées à des négociations plus stratégiques et à des audits.',
	proc_5:
		'Réduction estimée à {X} de l’exposition aux risques en veillant à ce que les accords de fournisseurs contiennent uniquement des clauses standard pré-approuvées, sauf exception approuvée par le service juridique.',
	proc_6:
		'Réduction des pertes d’opportunités d’économies estimée entre {X1} et {X2} en veillant à ce que les obligations soient respectées, que les remises soient appliquées, que les pénalités soient perçues et que les renouvellements soient optimisés.',
	hr_1: 'Intégration des candidats entre {X} plus rapide, passant de plusieurs semaines à une période comprise entre {Y} jours seulement.',
	hr_2: 'Augmentation entre {X1} et {X2} des taux de conversion en réduisant les abandons pendant le processus d’accord. Intégrez entre {Y} candidats supplémentaires tous les ans.',
	hr_3: 'Amélioration de la productivité du personnel de {X1} à {X2}, ce qui libère tous les ans entre {Y} heures qui peuvent être consacrées à des activités RH à plus forte valeur ajoutée.',
	b2c_1:
		'Des contrats conclus entre {X} plus rapidement, avec la possibilité de réduire le cycle de ventes de plusieurs semaines à une période comprise entre {Y} jours seulement.',
	b2c_2:
		'Augmentation de {X1} à {X2} des taux de conversion en réduisant les abandons des clients pendant le processus d’accord.',
	b2c_3:
		'Amélioration de la productivité du personnel de {X1} à {X2}, ce qui libère tous les ans entre {Y} heures qui peuvent être consacrées à des activités à plus forte valeur ajoutée.',
	up_to_1_1: 'Entre {X}',
	up_to_1_2: 'dollars/an',
	up_to_2_1: 'Entre {X}',
	up_to_2_2: 'heures-employés par an',
	up_to_3_1: 'Entre {X}',
	up_to_3_2: 'jours d’intégration par fournisseur ',
	up_to_4_1: 'Entre {X}',
	up_to_4_2: 'jours d’intégration par candidat',
	up_to_5_1: 'Entre {X}',
	up_to_5_2: 'jours d’intégration par client',
	up_to_6_1: 'Entre {X}',
	up_to_6_2: 'candidats par an'
};

export const currency = 'EUR';
export const lang = 'fr-fr';
