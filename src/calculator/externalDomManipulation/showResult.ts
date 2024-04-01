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
					setTimeout(() => {
						resultContainer.style.display = 'block';
						onToggleResultVisibility();
						setTimeout(() => {
							document.getElementById('ds-calc-cta-update-container')?.scrollIntoView();
						}, 500);
					}, 500);
				}
			} else {
				setTimeout(() => {
					if (resultContainer) {
						resultContainer.style.display = 'none';
					}
					onToggleResultVisibility();
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
