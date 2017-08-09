(function() {

	const button = document.getElementsByClassName("submit")[0];
	const input = document.getElementsByClassName("login")[0];

	//console.log(button);

	button.addEventListener("click", event => {
		event.preventDefault();
		input.value == "" ? input.classList.add("error") : location.assign("dashboard.html");
		console.log(input.className);
	});

})();