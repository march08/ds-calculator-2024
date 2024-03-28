export const toggleResult = (visible: boolean, withLoader: boolean = true) => {
	const resultContainer = document.querySelector('.revealed-results') as HTMLDivElement | undefined;

	if (resultContainer) {
		if (resultContainer.getAttribute('data-ds-initialized') === 'true') {
			if (visible) {
				if (withLoader) {
					const loaderContainer = document.getElementById('ui-calc-loader');
					if (resultContainer) {
						setTimeout(() => {
							resultContainer.style.display = 'block';
						}, 1500);
					}
					if (loaderContainer) {
						loaderContainer.style.opacity = '1';
						setTimeout(() => {
							loaderContainer.style.opacity = '0';
							document.getElementById('ds-calc-cta-update-container')?.scrollIntoView();
						}, 3000);
					}
				} else {
					if (resultContainer) {
						resultContainer.style.display = 'block';
						resultContainer.scrollIntoView();
					}
				}
			} else {
				setTimeout(() => {
					if (resultContainer) {
						console.log('set display none');
						resultContainer.style.display = 'none';
					}
				}, 2000);
			}
		} else {
			if (visible) {
				resultContainer.style.display = 'block';
			}
		}
		resultContainer.setAttribute('data-ds-initialized', 'true');
	}
};
