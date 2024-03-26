export const toggleResult = (visible: boolean) => {
	console.log('toggle', visible);
	const resultContainer = document.getElementById('result-container');
	const nextOpacity = visible ? '1' : '0';
	if (resultContainer) {
		resultContainer.style.opacity = nextOpacity;
	}
};
