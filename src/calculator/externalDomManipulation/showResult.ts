export const toggleResult = (visible: boolean, onToggleResultVisibility: VoidFunction) => {
	const resultContainer = document.querySelector('.revealed-results') as HTMLDivElement | undefined;
	console.log('toggleResult', visible);
	if (resultContainer) {
		if (resultContainer.getAttribute('data-ds-initialized') === 'true') {
			if (visible) {
				if (resultContainer) {
					setTimeout(() => {
						resultContainer.style.display = 'block';
						onToggleResultVisibility();
					}, 1500);
				}

				setTimeout(() => {
					document.getElementById('ds-calc-cta-update-container')?.scrollIntoView();
				}, 3000);
			} else {
				setTimeout(() => {
					if (resultContainer) {
						resultContainer.style.display = 'none';
						onToggleResultVisibility();
					}
				}, 2000);
			}
		} else {
			if (visible) {
				resultContainer.style.display = 'block';
				onToggleResultVisibility();
			} else {
				resultContainer.style.display = 'none';
				onToggleResultVisibility();
			}
		}
		resultContainer.setAttribute('data-ds-initialized', 'true');
	}
};
