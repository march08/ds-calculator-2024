import type { ScrollInto } from '../types.js';

export const toggleResult = (
	visible: boolean,
	{
		onToggleResultVisibility,
		onCalculateAnimationStart,
		scrollInto
	}: {
		onToggleResultVisibility: VoidFunction;
		onCalculateAnimationStart: VoidFunction;
		scrollInto: ScrollInto;
	}
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
							scrollInto(resultContainer, { lock: true });
						}, 500);
					}, 1500);
				}
			} else {
				setTimeout(() => {
					if (resultContainer) {
						resultContainer.style.display = 'none';
					}
					onToggleResultVisibility();
				}, 200);
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
