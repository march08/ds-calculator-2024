$(document).ready(function () {
	let select = $('#lang-selector');

	// Define the change event handler
	function onLanguageChange() {
		var selectedValue = select.val();
		if (selectedValue === window.location.href) {
			return;
		} else {
			window.location.href = selectedValue;
		}
	}

	// Bind the change event handler
	select.on('change', onLanguageChange);

	// Check URL on page load and set select value without triggering change event
	var currentLang = window.location.href;

	// Check if currentLang exists in the select options
	if (select.find('option[value="' + currentLang + '"]').length === 0) {
		currentLang = ''; // Default to empty string if no match
	} else {
		select.off('change'); // Unbind the change event handler
		select.val(currentLang); // Set the value
		select.on('change', onLanguageChange); // Rebind the change event handler
	}
});
