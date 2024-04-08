import { renderConfigToText } from '../calculations/utils.js';
import type { OverallResult } from '../types.js';
const nl = '\r\n';

export const updateContactFormDescriptionField = (result: OverallResult) => {
	if (typeof document !== 'undefined') {
		const textAreaEl: HTMLTextAreaElement | null = document.querySelector(
			'.gcdc-form-render textarea[name=description]'
		);

		const topAreas = (result.topTwo || []).map((item) => item.fullText).join(nl);

		const allItems = (result.allRes || [])
			.map((item) => {
				return renderConfigToText(item);
			})
			.join(nl);

		console.log(allItems);

		const value = `${topAreas}

See what's possible with intelligent agreement management:
		
${allItems}`;

		if (textAreaEl) {
			textAreaEl.value = value;
		}
	}
};
