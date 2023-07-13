// switching login and sign up
$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});

//form validation
$(window).trigger("hashchange");

// login form validation
function validateLoginForm(){
	var email = document.getElementById("logEmail").value;
	var password = document.getElementById("logPassword").value;

	if(email == "" || password == ""){
		document.getElementById("errorMsg").innerHTML = "Please fill the field first";
		return false;
	}

	else if (password.length < 8){
		document.getElementById("errorMsg").innerHTML = "Password must include 8 characters or more";
		return false;
	}

	else{
		alert("You are Successfully loged in Welcom to our Website");
		return true;
	}

}

// signup form validation
function validateSignupForm(){
	var name = document.getElementById("FullName").value;
	var number = document.getElementById("MobileNumber").value;
	var email = document.getElementById("SignEmail").value;
	var password = document.getElementById("SignPassword").value;

	if(name == "" || number == "" || email == "" || password == "" ){
		document.getElementById("errorMsg").innerHTML = "Please all fill the required field";
		return false;
	}

	else if ( number.length < 10 ){
		document.getElementById("errorMsg").innerHTML = "Please include 10 numbers '(example=9812345687)'";
		return false;
	}
	 
	else if (password.length < 8){
		document.getElementById("errorMsg").innerHTML = "Please enter atleast 8 characters";
		return false;
	}

	else{
		alert("You are Signed In Successfully");
		return true;
	}
}