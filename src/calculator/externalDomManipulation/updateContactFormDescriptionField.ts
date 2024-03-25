export const updateContactFormDescriptionField = (allResText: string, totalImpactText: string) => {
	if (typeof document !== 'undefined') {
		const textAreaEl: HTMLTextAreaElement | null = document.querySelector(
			'#gate-contact-form textarea[name=description]'
		);

		if (textAreaEl) {
			textAreaEl.value = `FIELD IS DISPLAYED FOR TESTING PURPOSES

${allResText}

${totalImpactText}`;
		}
	}
};
