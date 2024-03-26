export const toggleResult = (visible: boolean, withLoader: boolean = true) => {
	const resultContainer = document.getElementById('result-container');

	if (visible) {
		if (withLoader) {
			const loaderContainer = document.getElementById('ui-calc-loader');
			if (loaderContainer) {
				loaderContainer.style.opacity = '1';
				setTimeout(() => {
					loaderContainer.style.opacity = '0';
					if (resultContainer) {
						resultContainer.style.opacity = '1';
					}
				}, 3000);
			}
		} else {
			if (resultContainer) {
				resultContainer.style.opacity = '1';
			}
		}
	} else {
		if (resultContainer) {
			resultContainer.style.opacity = '0';
		}
	}
};
