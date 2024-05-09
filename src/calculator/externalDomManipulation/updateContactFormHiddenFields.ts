import type { OverallResultWithTranslations } from '../calculations/calculate.js';
const nl = '\r\n';

const setHiddenField = (
	name:
		| 'dynamic_benefit1'
		| 'dynamic_benefit2'
		| 'dynamic_result1'
		| 'dynamic_result2'
		| 'dynamic_result3',
	value: string
) => {
	if (typeof document !== 'undefined') {
		const hiddenField = document.querySelector(`.gcdc-form-render input[name=${name}]`);
		if (hiddenField) {
			hiddenField.setAttribute('value', value);
		}
	}
};

export const updateContactFormDescriptionField = (result: OverallResultWithTranslations) => {
	if (typeof document !== 'undefined') {
		setHiddenField('dynamic_benefit1', result.topTwo[0].fullText);
		setHiddenField('dynamic_benefit2', result.topTwo[1].fullText);
		setHiddenField('dynamic_result1', result.allRes[0].translatedText);
		setHiddenField('dynamic_result2', result.allRes[1].translatedText);
		setHiddenField('dynamic_result3', result.allRes[2].translatedText);

		/** Description field */
		const textAreaEl: HTMLTextAreaElement | null = document.querySelector(
			'.gcdc-form-render textarea[name=description]'
		);

		const topAreas = (result.topTwo || []).map((item) => item.fullText).join(nl);

		const allItems = (result.allRes || [])
			.map((item) => {
				return item.translatedText;
			})
			.join(nl);

		const value = `Based on your inputs, The Agreement Trap costs your team:*
${topAreas}

See what’s possible with Intelligent Agreement Management:*
${allItems}`;

		if (textAreaEl) {
			textAreaEl.value = value;
		}
	}
};
