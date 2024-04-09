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

		const value = `Based on your inputs, The Agreement Trap costs your team:*
${topAreas}

See what’s possible with Intelligent Agreement Management:*
${allItems}`;

		if (textAreaEl) {
			textAreaEl.value = value;
		}
	}
};
