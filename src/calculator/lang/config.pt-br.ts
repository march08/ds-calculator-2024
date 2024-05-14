import type { FlowConfig, LangTranslation } from '../types.js';

export const flowConfig: FlowConfig = {
	calcConfigStep1: [
		{
			type: 'text',
			data: 'Eu trabalho em'
		},
		{
			type: 'select',
			data: {
				key: 'businessArea',
				placeholder: 'Sua área',
				multiselect: true,
				multiselectLimit: 2,
				displayValueLowercase: false,
				options: [
					{
						title: 'Selecione até dois processos de negócio'
					},
					{ key: 'B2B', label: 'Vendas B2B ' },
					{ key: 'PROC', label: 'Compras' },
					{ key: 'HR', label: 'RH' },
					{ key: 'B2C', label: 'Vendas/CX B2C' }
				]
			}
		},
		{
			type: 'text',
			data: 'em'
		},
		{
			type: 'select',
			data: {
				key: 'industry',
				placeholder: 'Seu setor',
				options: [
					{
						title: 'Selecione seu setor'
					},
					{ key: 'Automotive', label: 'automotivo' },
					{ key: 'Business Services', label: 'serviços empresariais' },
					{ key: 'Construction and Real Estate', label: 'construção e segmento imobiliário ' },
					{ key: 'Education', label: 'educação' },
					{ key: 'Energy', label: 'energia' },
					{ key: 'Entertainment and Media', label: 'entretenimento e mídia' },
					{ key: 'Financial Services', label: 'serviços financeiros e bancários ' },
					{ key: 'Government', label: 'setor público ' },
					{ key: 'Healthcare', label: 'saúde' },
					{ key: 'Hospitality', label: 'hospitalidade' },
					{ key: 'Manufacturing', label: 'manufatura' },
					{
						key: 'Pharmaceuticals and Biotechnology',
						label: 'farmacêutico e biotecnologia'
					},
					{ key: 'Retail', label: 'varejo' },
					{ key: 'Technology', label: 'tecnologia' },
					{ key: 'Telecommunications', label: 'telecomunicações' },
					{ key: 'Transportation and Logistics', label: 'transporte e logística' }
				]
			}
		}
	],
	calcConfigStep2b2b: [
		{
			type: 'text',
			data: 'Todos os anos, minha organização arrecada'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_revenue',
				placeholder: 'Receita',
				options: [
					{
						title: 'Selecione sua receita anual com B2B'
					},
					{
						key: '1000000',
						label: 'R$ 5 milhões'
					},
					{
						key: '10000000',
						label: 'R$ 50 milhões'
					},
					{
						key: '50000000',
						label: 'R$ 250 milhões'
					},
					{
						key: '100000000',
						label: 'R$ 500 milhões'
					},
					{
						key: '250000000',
						label: 'R$ 1.25 bilhões '
					},
					{
						key: '500000000',
						label: 'R$ 2.5 bilhões'
					},
					{
						key: '1000000000',
						label: 'R$ 5 bilhões '
					},
					{
						key: '5000000000',
						label: 'R$ 25 bilhões'
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
			data: 'e processa'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_agreement_volume',
				placeholder: 'Volume de acordos',
				options: [
					{
						title: 'Selecione seu volume anual de acordos tipo B2B'
					},
					{
						key: '1000',
						label: '1.000 acordos'
					},
					{
						key: '2500',
						label: '2.500 acordos'
					},
					{
						key: '5000',
						label: '5.000 acordos'
					},
					{
						key: '10000',
						label: '10.000 acordos'
					},
					{
						key: '25000',
						label: '25.000 acordos'
					},
					{
						key: '50000',
						label: '50.000 acordos'
					},
					{
						key: '100000',
						label: '100.000 acordos'
					},
					{
						key: '1000000',
						label: '1.000.000 acordos'
					},
					{
						key: '10000000',
						label: '10.000.000 acordos'
					}
				]
			}
		},
		{
			type: 'text',
			data: 'por meio de um'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_process_complexity',
				placeholder: 'Complexidade do processo',

				options: [
					{
						title: 'Selecione a complexidade do processo dos acordos'
					},
					{
						key: 'low',
						label: 'processo com baixa complexidade'
					},
					{
						key: 'medium',
						label: 'processo com média complexidade'
					},
					{
						key: 'high',
						label: 'processo com alta complexidade'
					}
				]
			}
		}
	],
	calcConfigStep2hr: [
		{
			type: 'text',
			data: 'Minha organização tem'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_count',
				placeholder: 'Número de funcionários',
				options: [
					{
						title: 'Selecione o número de funcionários'
					},
					{
						key: '1000',
						label: '1.000 funcionários'
					},
					{
						key: '2500',
						label: '2.500 funcionários'
					},
					{
						key: '5000',
						label: '5.000 funcionários'
					},
					{
						key: '10000',
						label: '10.000 funcionários'
					},
					{
						key: '25000',
						label: '25.000 funcionários'
					},
					{
						key: '50000',
						label: '50.000 funcionários'
					},
					{
						key: '100000',
						label: '100.000 funcionários'
					},
					{
						key: '1000000',
						label: '1.000.000 funcionários'
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
			data: 'e processa'
		},
		{
			type: 'select',
			data: {
				key: 'HR_agreement_volume',
				placeholder: 'Volume de acordos com os funcionários',
				options: [
					{
						title: 'Selecione o volume anual de acordos com os funcionários'
					},
					{
						key: '1000',
						label: '1.000 acordos anuiais'
					},
					{
						key: '2500',
						label: '2.500 acordos anuiais'
					},
					{
						key: '5000',
						label: '5.000 acordos anuiais'
					},
					{
						key: '10000',
						label: '10.000 acordos anuiais'
					},
					{
						key: '25000',
						label: '25.000 acordos anuiais'
					},
					{
						key: '50000',
						label: '50.000 acordos anuiais'
					},
					{
						key: '100000',
						label: '100.000 acordos anuiais'
					},
					{
						key: '1000000',
						label: '1.000.000 acordos anuiais'
					},
					{
						key: '10000000',
						label: '10.000.000 acordos anuiais'
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
			data: 'principalmente para'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_type',
				placeholder: 'Tipo de funcionário',
				options: [
					{
						title: 'Selecione o tipo mais comum de funcionário'
					},
					{
						key: 'fulltime',
						label: 'funcionários de tempo integral'
					},
					{
						key: 'parttime',
						label: 'funcionários sazonais/de meio período'
					}
				]
			}
		}
	],
	calcConfigStep2procurement: [
		{
			type: 'text',
			data: 'Todo ano, minha organização gasta'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_annual_spend',
				placeholder: 'Despesas anuais',

				options: [
					{
						title: 'Selecione suas despesas anuais'
					},
					{
						key: '1000000',
						label: 'R$ 5 milhões'
					},
					{
						key: '10000000',
						label: 'R$ 50 milhões'
					},
					{
						key: '50000000',
						label: 'R$ 250 milhões'
					},
					{
						key: '100000000',
						label: 'R$ 500 milhões'
					},
					{
						key: '250000000',
						label: 'R$ 1.25 bilhões '
					},
					{
						key: '500000000',
						label: 'R$ 2.5 bilhões'
					},
					{
						key: '1000000000',
						label: 'R$ 5 bilhões '
					},
					{
						key: '5000000000',
						label: 'R$ 25 bilhões'
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
			data: 'com'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_spend_type',
				placeholder: 'Tipo de despesa',
				options: [
					{
						title: 'Selecione o tipo de despesa'
					},
					{
						key: 'direct',
						label: 'despesas diretas '
					},
					{
						key: 'indirect',
						label: 'despesas indiretas '
					},
					{
						key: 'capex',
						label: 'despesas de capital'
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
			data: 'e fecha'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_agreement_volume',
				placeholder: 'Volume de acordos',
				options: [
					{
						title: 'Selecione seu volume anual de acordos de compras'
					},
					{
						key: '1000',
						label: '1.000 acordos'
					},
					{
						key: '2500',
						label: '2.500 acordos'
					},
					{
						key: '5000',
						label: '5.000 acordos'
					},
					{
						key: '10000',
						label: '10.000 acordos'
					},
					{
						key: '25000',
						label: '25.000 acordos'
					},
					{
						key: '50000',
						label: '50.000 acordos'
					},
					{
						key: '100000',
						label: '100.000 acordos'
					},
					{
						key: '1000000',
						label: '1.000.000 acordos'
					},
					{
						key: '10000000',
						label: '10.000.000 acordos'
					}
				]
			}
		}
	],
	calcConfigStep2b2c: [
		{
			type: 'text',
			data: 'Todos os anos, minha organização arrecada'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_revenue',
				placeholder: 'Receita',
				options: [
					{
						title: 'Selecione sua receita anual com B2C'
					},
					{
						key: '1000000',
						label: 'R$ 5 milhões'
					},
					{
						key: '10000000',
						label: 'R$ 50 milhões'
					},
					{
						key: '50000000',
						label: 'R$ 250 milhões'
					},
					{
						key: '100000000',
						label: 'R$ 500 milhões'
					},
					{
						key: '250000000',
						label: 'R$ 1.25 bilhões '
					},
					{
						key: '500000000',
						label: 'R$ 2.5 bilhões'
					},
					{
						key: '1000000000',
						label: 'R$ 5 bilhões '
					},
					{
						key: '5000000000',
						label: 'R$ 25 bilhões'
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
			data: 'e processa'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_agreement_volume',
				placeholder: 'Volume de acordos',
				options: [
					{
						title: 'Selecione seu volume anual de acordos tipo B2C '
					},
					{
						key: '1000',
						label: '1.000 acordos'
					},
					{
						key: '2500',
						label: '2.500 acordos'
					},
					{
						key: '5000',
						label: '5.000 acordos'
					},
					{
						key: '10000',
						label: '10.000 acordos'
					},
					{
						key: '25000',
						label: '25.000 acordos'
					},
					{
						key: '50000',
						label: '50.000 acordos'
					},
					{
						key: '100000',
						label: '100.000 acordos'
					},
					{
						key: '1000000',
						label: '1.000.000 acordos'
					},
					{
						key: '10000000',
						label: '10.000.000 acordos'
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
			data: 'e coleta principalmente'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_customer_information',
				placeholder: 'Informações sobre os clientes',
				options: [
					{
						title: 'Selecione as informações mais comuns coletadas'
					},
					{
						key: 'signature',
						label: 'assinatura/consentimento dos clientes'
					},
					{
						key: 'identity',
						label: 'dados dos clientes e/ou confirmação da identidade'
					}
				]
			}
		}
	],
	calcConfigLast: [
		{
			type: 'text',
			data: 'Por fim, quero'
		},
		{
			type: 'select',
			data: {
				key: 'driver',
				placeholder: 'Adicionar prioridades',
				multiselect: true,
				multiselectDelimiter: '; ',
				options: [
					{
						key: 'B2B',
						title: 'Selecione suas prioridades nas vendas tipo B2B'
					},
					{
						key: 'B2B_1_seller_productivity',
						label: 'estimular os negócios com vendas mais rápidas e produtivas'
					},
					{
						key: 'B2B_2_reduced_risk_exposure',
						label: 'atenuar as cláusulas arriscadas para reduzir a exposição aos riscos'
					},
					{
						key: 'B2B_3_reduced_revenue_leakage',
						label: 'maximizar o valor do acordo e limitar oportunidades perdidas'
					},
					{
						key: 'PROC',
						title: 'Selecione suas prioridades para o setor de compras'
					},
					{
						key: 'PROC_1_onboard_vendors',
						label: 'integrar mais rapidamente os fornecedores para minha equipe ser mais produtiva '
					},
					{
						key: 'PROC_2_improved_productivity',
						label: 'melhorar a eficiência operacional para aumentar a capacidade'
					},
					{
						key: 'PROC_3_reduce_risk',
						label: 'atenuar as cláusulas de risco a fim de reduzir a exposição aos riscos'
					},
					{
						key: 'PROC_4_max_value',
						label: 'maximizar o valor das despesas e receber integralmente os benefícios'
					},
					{
						key: 'HR',
						title: 'Selecione suas prioridades para o RH'
					},
					{
						key: 'HR_1_faster_onboard',
						label: 'integrar as novas contratações de forma mais rápida e fácil'
					},
					{ key: 'HR_2_attract_retain_talent', label: 'atrair e reter os melhores talentos' },
					{
						key: 'HR_3_staff_productivity',
						label: 'aumentar a produtividade da equipe para ampliar o escopo de ação'
					},
					{
						key: 'B2C',
						title: 'Selecione suas prioridades para as vendas tipo B2C'
					},
					{
						key: 'B2C_1_onboard_customers',
						label: 'integrar clientes de forma mais rápida e fácil'
					},
					{ key: 'B2C_2_attract_retain', label: 'atrair e reter mais clientes' },
					{
						key: 'B2C_3_boost_productivity',
						label: 'aumentar a produtividade da equipe para melhorar a rapidez e a capacidade'
					}
				] as const
			}
		}
	]
} as const;

export const langConfig: LangTranslation = {
	confirm_selection: 'Confirmar seleção',
	update_your_results: 'Atualizar resultados',
	edit_your_assessment: 'Edite sua avaliação',
	title_days: 'dias'
};

export const resultText = {
	b2b_1:
		'Negociações {X} mais rápidas, com o potencial de reduzir o ciclo de vendas de semanas para apenas {Y} dias.',
	b2b_2:
		'Vendedores {X} mais produtivos, o que libera {Y} horas anuais para acelerar o desenvolvimento do pipeline, fechar mais negócios, segurar pontos de preço etc.',
	b2b_3:
		'Até {X} dos acordos de vendas B2B concluídos sem intervenção jurídica ao se estabelecer um processo de autoatendimento com medidas de segurança inteligentes',
	b2b_4:
		'Análises e aprovações jurídicas até {X} mais rápidas nos acordos de vendas B2B, liberando {Y} horas anuais para negociações mais estratégicas, auditorias etc.',
	b2b_5:
		'Redução de {X} na exposição ao risco estimado ao assegurar que os acordos de vendas B2B incluam apenas cláusulas padrão pré-aprovadas, salvo exceção em lei.',
	b2b_6:
		'Redução estimada de {X1} a {X2} no vazamento de receitas ao garantir o cumprimento das obrigações, a cobrança das taxas e a maximização dos eventos de renovação.',
	proc_1: 'Integração {X} mais rápida dos fornecedores, passando de semanas para apenas {Y} dias.',
	proc_2:
		'Melhoria de {X1} a {X2} na produtividade da equipe de compras, liberando {Y} horas anuais para prioridades como gestão de fornecedores e inovação.',
	proc_3:
		'Até {X} dos acordos com fornecedores concluídos sem intervenção jurídica ao se estabelecer um processo de autoatendimento com medidas de segurança inteligentes.',
	proc_4:
		'Análises e aprovações jurídicas até {X} mais rápidas nos acordos com fornecedores, liberando {Y} horas anuais para negociações mais estratégicas, auditorias etc.',
	proc_5:
		'Redução de {X} na exposição ao risco estimado ao assegurar que os acordos com fornecedores incluam apenas cláusulas padrão pré-aprovadas, salvo exceção em lei.',
	proc_6:
		'Redução estimada de {X1} a {X2} no vazamento de economias ao garantir o cumprimento das obrigações, o recolhimento dos abatimentos e multas e a maximização das renovações.',
	hr_1: 'Integração {X} mais rápida dos candidatos, passando de semanas para apenas {Y} dias.',
	hr_2: 'Aumento de {X1} a {X2} nas taxas de conversão ao reduzir o abandono no processo do acordo. Integre anualmente mais {Y} candidatos.',
	hr_3: 'Melhoria de {X1} a {X2} na produtividade da equipe, liberando {Y} horas anuais para atividades de RH de maior valor.',
	b2c_1:
		'Negociações {X} mais rápidas, com o potencial de reduzir o ciclo de vendas de semanas para apenas {Y} dias.',
	b2c_2:
		'Aumento de {X1} a {X2} nas taxas de conversão ao reduzir o abandono por parte dos clientes durante o processo dos acordos.',
	b2c_3:
		'Melhoria de {X1} a {X2} na produtividade da equipe, liberando {Y} horas anuais para atividades de maior valor.',
	up_to_1_1: 'Até {X}',
	up_to_1_2: 'por ano',
	up_to_2_1: 'Até {X}',
	up_to_2_2: 'horas por funcionário por ano',
	up_to_3_1: 'Até {X}',
	up_to_3_2: 'dias de integração por fornecedor',
	up_to_4_1: 'Até {X}',
	up_to_4_2: 'dias de integração por candidato',
	up_to_5_1: 'Até {X}',
	up_to_5_2: 'dias de integração por cliente',
	up_to_6_1: 'Até {X}',
	up_to_6_2: 'candidatos por ano'
};

export const currency = 'BRL';
export const valueMultiplier = 5;

export const lang = 'pt-br';
