import type { FlowConfig, LangTranslation } from '../types.js';
export const lang = 'es-mx';

export const flowConfig: FlowConfig = {
	calcConfigStep1: [
		{
			type: 'text',
			data: 'Trabajo en'
		},
		{
			type: 'select',
			data: {
				key: 'businessArea',
				placeholder: 'Tu área',
				multiselect: true,
				multiselectLimit: 2,
				displayValueLowercase: false,
				options: [
					{
						title: 'Selecciona hasta dos procesos de negocio'
					},
					{ key: 'B2B', label: 'Ventas B2B' },
					{ key: 'PROC', label: 'Compras' },
					{ key: 'HR', label: 'RR.HH.' },
					{ key: 'B2C', label: 'Experiencia del cliente/ventas B2C' }
				]
			}
		},
		{
			type: 'text',
			data: 'de'
		},
		{
			type: 'select',
			data: {
				key: 'industry',
				placeholder: 'Tu industria',
				options: [
					{
						title: 'Selecciona tu industria'
					},
					{ key: 'Automotive', label: 'Automotriz' },
					{ key: 'Business Services', label: 'Servicios a empresas' },
					{ key: 'Construction and Real Estate', label: 'Construcción e Inmobiliaria' },
					{ key: 'Education', label: 'Educación' },
					{ key: 'Energy', label: 'Energía' },
					{ key: 'Entertainment and Media', label: 'Entretenimiento y Medios de Comunicación' },
					{ key: 'Financial Services', label: 'Servicios Financieros y Banca' },
					{ key: 'Government', label: 'Gobierno y Sector Público' },
					{ key: 'Healthcare', label: 'Atención de la salud' },
					{ key: 'Hospitality', label: 'Hospitalidad' },
					{ key: 'Manufacturing', label: 'Manufactura' },
					{
						key: 'Pharmaceuticals and Biotechnology',
						label: 'Farmacéutica y Biotecnología'
					},
					{ key: 'Retail', label: 'Comercio minorista' },
					{ key: 'Technology', label: 'Tecnología' },
					{ key: 'Telecommunications', label: 'Telecomunicaciones' },
					{ key: 'Transportation and Logistics', label: 'Transporte y Logística' }
				]
			}
		}
	],
	calcConfigStep2b2b: [
		{
			type: 'text',
			data: 'Cada año, mi organización obtiene'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_revenue',
				displayValueLowercase: false,
				placeholder: 'Ingresos',
				options: [
					{
						title: 'Selecciona tus ingresos anuales B2B'
					},
					{
						key: '1000000',
						label: '$17 MXN millones'
					},
					{
						key: '10000000',
						label: '$170 MXN millones'
					},
					{
						key: '50000000',
						label: '$850 MXN millones'
					},
					{
						key: '100000000',
						label: '$1.6 MXN mil millones'
					},
					{
						key: '250000000',
						label: '$4.2 MXN mil millones'
					},
					{
						key: '500000000',
						label: '$8.5 MXN mil millones'
					},
					{
						key: '1000000000',
						label: '$17 MXN mil millones'
					},
					{
						key: '5000000000',
						label: '$85 MXN mil millones'
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
			data: 'y procesa'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_agreement_volume',
				placeholder: 'Volumen de acuerdos',
				options: [
					{
						title: 'Selecciona tu volumen anual de acuerdos B2B'
					},
					{
						key: '1000',
						label: '1,000 acuerdos'
					},
					{
						key: '2500',
						label: '2,500 acuerdos'
					},
					{
						key: '5000',
						label: '5,000 acuerdos'
					},
					{
						key: '10000',
						label: '10,000 acuerdos'
					},
					{
						key: '25000',
						label: '25,000 acuerdos'
					},
					{
						key: '50000',
						label: '50,000 acuerdos'
					},
					{
						key: '100000',
						label: '100,000 acuerdos'
					},
					{
						key: '1000000',
						label: '1,000,000 acuerdos'
					},
					{
						key: '10000000',
						label: '10,000,000 acuerdos'
					}
				]
			}
		},
		{
			type: 'text',
			data: 'mediante una'
		},
		{
			type: 'select',
			data: {
				key: 'B2B_process_complexity',
				placeholder: 'Complejidad del proceso',

				options: [
					{
						title: 'Selecciona la complejidad del proceso de acuerdo'
					},
					{
						key: 'low',
						label: 'Complejidad del proceso baja'
					},
					{
						key: 'medium',
						label: 'Complejidad del proceso media'
					},
					{
						key: 'high',
						label: 'Complejidad del proceso alta'
					}
				]
			}
		}
	],
	calcConfigStep2hr: [
		{
			type: 'text',
			data: 'Mi organización tiene'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_count',
				placeholder: 'Número de empleados',
				options: [
					{
						title: 'Selecciona tu número de empleados'
					},
					{
						key: '1000',
						label: '1,000 empleados'
					},
					{
						key: '2500',
						label: '2,500 empleados'
					},
					{
						key: '5000',
						label: '5,000 empleados'
					},
					{
						key: '10000',
						label: '10,000 empleados'
					},
					{
						key: '25000',
						label: '25,000 empleados'
					},
					{
						key: '50000',
						label: '50,000 empleados'
					},
					{
						key: '100000',
						label: '100,000 empleados'
					},
					{
						key: '1000000',
						label: '1,000,000 empleados'
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
			data: 'y procesa'
		},
		{
			type: 'select',
			data: {
				key: 'HR_agreement_volume',
				placeholder: 'Volumen de acuerdos de empleados',
				options: [
					{
						title: 'Selecciona el volumen anual de acuerdos de empleados'
					},
					{
						key: '1000',
						label: '1,000 acuerdos/año'
					},
					{
						key: '2500',
						label: '2,500 acuerdos/año'
					},
					{
						key: '5000',
						label: '5,000 acuerdos/año'
					},
					{
						key: '10000',
						label: '10,000 acuerdos/año'
					},
					{
						key: '25000',
						label: '25,000 acuerdos/año'
					},
					{
						key: '50000',
						label: '50,000 acuerdos/año'
					},
					{
						key: '100000',
						label: '100,000 acuerdos/año'
					},
					{
						key: '1000000',
						label: '1,000,000 acuerdos/año'
					},
					{
						key: '10000000',
						label: '10,000,000 acuerdos/año'
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
			data: 'en su mayoría para'
		},
		{
			type: 'select',
			data: {
				key: 'HR_employee_type',
				placeholder: 'Tipo de empleado',
				options: [
					{
						title: 'Selecciona el tipo de empleado más común'
					},
					{
						key: 'fulltime',
						label: 'Empleados de tiempo completo'
					},
					{
						key: 'parttime',
						label: 'Empleados eventuales/de medio tiempo'
					}
				]
			}
		}
	],
	calcConfigStep2procurement: [
		{
			type: 'text',
			data: 'Cada año, mi organización gasta'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_annual_spend',
				displayValueLowercase: false,
				placeholder: 'Gasto anual',

				options: [
					{
						title: 'Selecciona tus gastos anuales'
					},
					{
						key: '1000000',
						label: '$17 MXN millones'
					},
					{
						key: '10000000',
						label: '$170 MXN millones'
					},
					{
						key: '50000000',
						label: '$850 MXN millones'
					},
					{
						key: '100000000',
						label: '$1.6 MXN mil millones'
					},
					{
						key: '250000000',
						label: '$4.2 MXN mil millones'
					},
					{
						key: '500000000',
						label: '$8.5 MXN mil millones'
					},
					{
						key: '1000000000',
						label: '$17 MXN mil millones'
					},
					{
						key: '5000000000',
						label: '$85 MXN mil millones'
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
			data: 'a través de'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_spend_type',
				placeholder: 'Tipo de gasto',
				options: [
					{
						title: 'Selecciona tu tipo de gasto'
					},
					{
						key: 'direct',
						label: 'Gastos directos'
					},
					{
						key: 'indirect',
						label: 'Gastos indirectos'
					},
					{
						key: 'capex',
						label: 'Gastos en capital'
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
			data: 'y completa'
		},
		{
			type: 'select',
			data: {
				key: 'PROC_agreement_volume',
				placeholder: 'Volumen de acuerdos',
				options: [
					{
						title: 'Selecciona tu volumen anual de compras'
					},
					{
						key: '1000',
						label: '1,000 acuerdos'
					},
					{
						key: '2500',
						label: '2,500 acuerdos'
					},
					{
						key: '5000',
						label: '5,000 acuerdos'
					},
					{
						key: '10000',
						label: '10,000 acuerdos'
					},
					{
						key: '25000',
						label: '25,000 acuerdos'
					},
					{
						key: '50000',
						label: '50,000 acuerdos'
					},
					{
						key: '100000',
						label: '100,000 acuerdos'
					},
					{
						key: '1000000',
						label: '1,000,000 acuerdos'
					},
					{
						key: '10000000',
						label: '10,000,000 acuerdos'
					}
				]
			}
		}
	],
	calcConfigStep2b2c: [
		{
			type: 'text',
			data: 'Cada año, mi organización obtiene'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_revenue',
				displayValueLowercase: false,
				placeholder: 'Ingresos',
				options: [
					{
						title: 'Selecciona tus ingresos anuales B2C'
					},
					{
						key: '1000000',
						label: '$17 MXN millones'
					},
					{
						key: '10000000',
						label: '$170 MXN millones'
					},
					{
						key: '50000000',
						label: '$850 MXN millones'
					},
					{
						key: '100000000',
						label: '$1.6 MXN mil millones'
					},
					{
						key: '250000000',
						label: '$4.2 MXN mil millones'
					},
					{
						key: '500000000',
						label: '$8.5 MXN mil millones'
					},
					{
						key: '1000000000',
						label: '$17 MXN mil millones'
					},
					{
						key: '5000000000',
						label: '$85 MXN mil millones'
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
			data: 'y procesa'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_agreement_volume',
				placeholder: 'Volumen de acuerdos',
				options: [
					{
						title: 'Selecciona tu volumen anual de acuerdos B2C'
					},
					{
						key: '1000',
						label: '1,000 acuerdos'
					},
					{
						key: '2500',
						label: '2,500 acuerdos'
					},
					{
						key: '5000',
						label: '5,000 acuerdos'
					},
					{
						key: '10000',
						label: '10,000 acuerdos'
					},
					{
						key: '25000',
						label: '25,000 acuerdos'
					},
					{
						key: '50000',
						label: '50,000 acuerdos'
					},
					{
						key: '100000',
						label: '100,000 acuerdos'
					},
					{
						key: '1000000',
						label: '1,000,000 acuerdos'
					},
					{
						key: '10000000',
						label: '10,000,000 acuerdos'
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
			data: 'principalmente al recopilar'
		},
		{
			type: 'select',
			data: {
				key: 'B2C_customer_information',
				placeholder: 'Información del cliente',
				options: [
					{
						title: 'Selecciona la información más común recopilada'
					},
					{
						key: 'signature',
						label: 'Firma/consentimiento del cliente'
					},
					{
						key: 'identity',
						label: 'Datos del cliente y/o verificación de la identidad'
					}
				]
			}
		}
	],
	calcConfigLast: [
		{
			type: 'text',
			data: 'Por último, quiero'
		},
		{
			type: 'select',
			data: {
				key: 'driver',
				placeholder: 'Agregar prioridades',
				multiselect: true,
				multiselectDelimiter: '; ',
				options: [
					{
						key: 'B2B',
						title: 'Selecciona tus prioridades para el equipo de ventas B2B'
					},
					{
						key: 'B2B_1_seller_productivity',
						label: 'Impulsar el crecimiento empresarial con ventas más rápidas y productivas'
					},
					{
						key: 'B2B_2_reduced_risk_exposure',
						label: 'Reducir la exposición al riesgo mitigando las cláusulas arriesgadas'
					},
					{
						key: 'B2B_3_reduced_revenue_leakage',
						label: 'Maximizar el valor del acuerdo y limitar oportunidades perdidas'
					},
					{
						key: 'PROC',
						title: 'Selecciona tus prioridades para el equipo de compras'
					},
					{
						key: 'PROC_1_onboard_vendors',
						label: 'OIncorporar proveedores más rápidamente para que mi equipo sea más productivo'
					},
					{
						key: 'PROC_2_improved_productivity',
						label: 'Mejorar la eficacia operativa para aumentar la capacidad'
					},
					{
						key: 'PROC_3_reduce_risk',
						label: 'Reducir la exposición al riesgo mitigando las cláusulas arriesgadas'
					},
					{
						key: 'PROC_4_max_value',
						label: 'Maximizar el valor del gasto y obtener todos los beneficios'
					},
					{
						key: 'HR',
						title: 'Selecciona tus prioridades para RR.HH.'
					},
					{
						key: 'HR_1_faster_onboard',
						label: 'Incorporar nuevas contrataciones de forma más rápida y sencilla'
					},
					{ key: 'HR_2_attract_retain_talent', label: 'Atraer y retener a los mejores talentos' },
					{
						key: 'HR_3_staff_productivity',
						label: 'Aumentar la productividad del personal para ampliar el alcance'
					},
					{
						key: 'B2C',
						title: 'Selecciona tus prioridades para el equipo de ventas B2C'
					},
					{
						key: 'B2C_1_onboard_customers',
						label: 'Incorporar clientes de forma más rápida y sencilla'
					},
					{ key: 'B2C_2_attract_retain', label: 'Atraer y retener más clientes' },
					{
						key: 'B2C_3_boost_productivity',
						label: 'Impulsar la productividad del personal para mejorar la velocidad y la capacidad'
					}
				] as const
			}
		}
	]
} as const;

export const langConfig: LangTranslation = {
	confirm_selection: 'Confirmar selección',
	update_your_results: 'Actualiza tus resultados',
	edit_your_assessment: 'Editar tu evaluación',
	title_days: 'días'
};

export const resultText = {
	b2b_1:
		'Negociaciones {X} más rápidas, con la posibilidad de reducir el ciclo de ventas de semanas a solo {Y} días.',
	b2b_2:
		'Vendedores un {X} más productivos, lo que libera {Y} horas anuales para agilizar el desarrollo de la cartera, cerrar más negociaciones, defender los puntos de precio, etc.',
	b2b_3:
		'Hasta el {X} de los acuerdos de ventas B2B se completan sin intervención legal al establecer un proceso de autoservicio con protecciones de seguridad inteligentes.',
	b2b_4:
		'Revisión y aprobaciones legales hasta un {X} más rápidas para los acuerdos de ventas B2B, liberando {Y} horas anuales para enfocarse en negociaciones más estratégicas, auditorías, etc.',
	b2b_5:
		'Reducción del {X} de la exposición estimada al riesgo al garantizar que los acuerdos de ventas B2B solo incluyan cláusulas estándar previamente aprobadas, a menos que la ley especifique lo contrario.',
	b2b_6:
		'Reducción estimada del {X} de las oportunidades de ingresos perdidas, lo que garantiza el cumplimiento de las obligaciones, el cobro de las tasas y la maximización de los eventos de renovación.',
	proc_1: 'Incorporación de proveedores {X} más rápida, pasando de semanas a solo {Y} días.',
	proc_2:
		'Mejora del {X} de la productividad del personal de compras, lo que libera {Y} horas anuales para centrarse en prioridades como la gestión de proveedores y la innovación.',
	proc_3:
		'Hasta el {X} de los acuerdos de ventas B2B se completan sin intervención legal al establecer un proceso de autoservicio con protecciones de seguridad inteligentes.',
	proc_4:
		'Revisión y aprobaciones legales hasta un {X} más rápidas para los acuerdos de ventas B2B, liberando {Y} horas anuales para enfocarse en negociaciones más estratégicas, auditorías, etc.',
	proc_5:
		'Reducción del {X} de la exposición estimada al riesgo al garantizar que los acuerdos de ventas B2B solo incluyan cláusulas estándar previamente aprobadas, a menos que la ley especifique lo contrario.',
	proc_6:
		'Reducción estimada del {X} de las oportunidades de ahorros perdidas, lo que garantiza el cumplimiento de las obligaciones, el cobro de las tasas y la maximización de los eventos de renovación.',
	hr_1: 'Incorporación de candidatos {X} más rápida, pasando de semanas a solo {Y} días.',
	hr_2: 'Aumento del {X} de las tasas de conversión al reducir el abandono en el proceso de acuerdo. Incorpora anualmente a {Y} candidatos adicionales.',
	hr_3: 'Mejora del {X} de la productividad del personal, liberando {Y} horas anuales para actividades de RR.HH. de mayor valor.',
	b2c_1:
		'Negociaciones {X} más rápidas, con la posibilidad de reducir el ciclo de ventas de semanas a solo {Y} días.',
	b2c_2:
		'Aumento del {X} de las tasas de conversión al reducir el abandono del cliente durante el proceso de acuerdo.',
	b2c_3:
		'Mejora del {X} de la productividad del personal, liberando {Y} horas anuales para actividades de mayor valor.',

	up_to_1_1: 'Hasta {X}',
	up_to_1_2: 'pesos/año',
	up_to_2_1: 'Hasta {X}',
	up_to_2_2: 'horas de empleado/año',
	up_to_3_1: 'Hasta {X}',
	up_to_3_2: 'días de incorporación/proveedor',
	up_to_4_1: 'Hasta {X}',
	up_to_4_2: 'días de incorporación/candidato',
	up_to_5_1: 'Hasta {X}',
	up_to_5_2: 'días de incorporación/cliente',
	up_to_6_1: 'Hasta {X}',
	up_to_6_2: 'candidatos/año'
};

export const currency = 'MXN';
export const valueMultiplier = 17;
