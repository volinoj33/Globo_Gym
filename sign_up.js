//James, Andrew, Noelle Globo-Gym Website Project

//Add Event Handlers for form
	var runEmail = document.getElementById("signupButton").onclick = validateEmail;
	
// Run Functions
	//validateEmail();

//Function to verify Email
	function validateEmail(runEmail) {
	//Set Variables to Input Fields
		var email = document.getElementById("email").value;
		var password = document.getElementById("psw").value; 
		var repeat = document.getElementById("psw-repeat").value;
	// Validate Email
		if(email == "" || password != repeat) {
			alert("Enter Valid Email or Password")
			return false;
		}else {
			return true;
		}
	}