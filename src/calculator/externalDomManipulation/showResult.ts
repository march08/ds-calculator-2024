export const toggleResult = (
	visible: boolean,
	onToggleResultVisibility: VoidFunction,
	onCalculateAnimationStart: VoidFunction
) => {
	const resultContainer = document.querySelector('.revealed-results') as HTMLDivElement | undefined;
	if (resultContainer) {
		if (resultContainer.getAttribute('data-ds-initialized') === 'true') {
			if (visible) {
				onCalculateAnimationStart();
				if (resultContainer) {
					onToggleResultVisibility();
					setTimeout(() => {
						resultContainer.style.display = 'block';
					}, 1500);
				}

				setTimeout(() => {
					document.getElementById('ds-calc-cta-update-container')?.scrollIntoView();
				}, 3000);
			} else {
				setTimeout(() => {
					onToggleResultVisibility();
					if (resultContainer) {
						resultContainer.style.display = 'none';
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
