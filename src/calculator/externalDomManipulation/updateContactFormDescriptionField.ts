export const updateContactFormDescriptionField = (allResText: string, totalImpactText: string) => {
	if (typeof document !== 'undefined') {
		const textAreaEl: HTMLTextAreaElement | null = document.querySelector(
			'.gate-a6428bda-8a1c-4dfc-9866-5232101b2e52 textarea[name=description]'
		);

		if (textAreaEl) {
			textAreaEl.value = `FIELD IS DISPLAYED FOR TESTING PURPOSES

${allResText}

${totalImpactText}`;
		}
	}
};
