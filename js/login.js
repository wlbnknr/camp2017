(function() {

	const button = document.getElementsByClassName("submit")[0];
	const input = document.getElementsByClassName("login")[0];
	const alert = document.getElementsByClassName("alert")[0];

	button.addEventListener("click", event => {
		event.preventDefault();
		if (input.value === "") {
			input.classList.add("error");
		}
		else {
			apirequest(input.value);
		}
	});

	function apirequest(password) {
		$.ajax({
			// Sends login and password to API
	 		type: "post",
			data: {
	    	login: "efi",
	    	password: password
	  		},
	  
	  		url: "https://efigence-camp.herokuapp.com/api/login",
			error: function(response) {
				const apiResponse = JSON.parse(response.responseText);

				// Changes input & alert styles to display error
				input.classList.add("error");
				alert.innerHTML = apiResponse.message;
				alert.style.display = "block";
	  		},
	  		success: function(response) {
	  		location.assign("dashboard.html");
	  		}
	});}

})();