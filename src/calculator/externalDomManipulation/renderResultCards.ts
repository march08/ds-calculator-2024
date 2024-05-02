import type { OverallResultWithTranslations } from '../calculations/calculate.js';
import { sortCalculatedResult } from '../utils/sortCalculatedResult.js';
import { getCurrencySymbol } from '../utils/number.js';
type Color = 'lavender' | 'deepblue' | 'gradient' | 'white';
type In = 0 | 1 | 2 | 3;
const colorMap: Record<In, Color> = {
	0: 'lavender',
	1: 'deepblue',
	2: 'gradient',
	3: 'white'
};

const imgSrcMap = {
	pie: {
		lavender:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be1717f884e86996321c_pie-dark.svg',
		deepblue:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be1739315d6374a1db07_pie-light.svg',
		gradient:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be1739315d6374a1db07_pie-light.svg',
		white:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be1739315d6374a1db07_pie-light.svg'
	},
	bar: {
		lavender:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be170af0ff599632518a_bar-light.svg',
		deepblue:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be170af0ff599632518a_bar-light.svg',
		gradient:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be170af0ff599632518a_bar-light.svg',
		white:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be176d96d1ef8456a2a9_bar-dark.svg'
	},
	calendar: {
		lavender:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be1766a9a4948b4ef569_calendar-lavender.svg',
		deepblue:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be17a05937fb11876c0a_calendar-blue-gradient.svg',
		gradient:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be17a05937fb11876c0a_calendar-blue-gradient.svg',
		white:
			'https://assets-global.website-files.com/659c190170ce3a9329d76dac/6604be1776fbd4e77d2d1bcf_calendar-white.svg'
	}
};

export const renderResultCards = (
	resultUnsorted: OverallResultWithTranslations['allRes'],
	targetResultCardsContainerSelector: string
) => {
	const result = sortCalculatedResult(resultUnsorted);
	const targetResultContainerEl = document.querySelector(targetResultCardsContainerSelector);

	if (!targetResultContainerEl) {
		return;
	}

	targetResultContainerEl.setAttribute('data-ds-total-items', `${result.length}`);

	const mappedResult = result.map((item, index) => {
		const colorindex = (index % 4) as 0 | 1 | 2 | 3;
		const color = colorMap[colorindex];
		const imgSrc = imgSrcMap[item.illustrationType][color];
		return `
	<div data-ds-result-card-style="${color}" class="hp-improve_card swiper-slide">
		<div class="hp-improve_card-content">
			<img src="${imgSrc}" alt="" class="hp-improve_card-illustration">
			<div class="hp-improve_result">
			${
				item.cardMainValueDollars
					? `
			<div data-ds-result-card="value" class="hp-improve_value">
				<sup data-ds-result-card="currency-span" class="hp-improve_superscript">${getCurrencySymbol()}</sup>
				<span data-ds-result-card="currency-value" class="hp-improve_span-value">${item.cardMainValue}</span>
			</div>`
					: `
			
			<div class="hp-persona_value">${item.cardMainValue}</div>
			`
			}
					<div class="text-size-regular">
					<div data-ds-result-card="description" class="hp-improve_description">
						${item.translatedTextHtml}
					</div>
					</div>
			</div>
		</div>
	</div>
</div>

`;
	});

	targetResultContainerEl.innerHTML = mappedResult.join('\n');
};
