function setCookie(cookieName, cookieValue, expirationDays) {
	var d = new Date();
	d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
	var expires = "expires=" + d.toUTCString();
	document.cookie =
		cookieName + "=" + cookieValue + "; " + expires + "; path=/";
}

function getCookie(cookieName) {
	var name = cookieName + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	var lastAccess = getCookie("lastAccess");
	var visitCount = getCookie("visitCount");
	var currentDate = new Date();
	if (visitCount === "") {
		setCookie("visitCount", "1");
	} else if (lastAccess === "") {
		setCookie("lastAccess", currentDate.getTime());
	} else {
		var minutes = Math.floor((currentDate.getTime() - lastAccess) / 60000);

		if (minutes >= 5) {
			if (lastAccess !== "") {
				if (minutes === 1) {
					document.getElementById("lastAccess").innerHTML =
						minutes + " minuto nazaj";
				} else if (minutes === 2) {
					document.getElementById("lastAccess").innerHTML =
						minutes + " minuti nazaj";
				} else if (minutes <= 3) {
					document.getElementById("lastAccess").innerHTML =
						minutes + " minut nazaj";
				}
				document.getElementById("accessCount").innerHTML =
					parseInt(visitCount) + 1;
				setCookie("lastAccess", currentDate.getTime(), 30);
				setCookie("visitCount", parseInt(visitCount) + 1, 30);
			} else {
				setCookie("lastAccess", currentDate.getTime(), 30);
				setCookie("visitCount", 1, 30);
			}
		} else {
			document.getElementById("accessCount").innerHTML = visitCount;
			document.getElementById("lastAccess").innerHTML = "malo prej";
		}
	}
}
checkCookie();

function showPassword() {
	const loginForm = document.getElementById("login-form");
	loginForm.addEventListener("submit", (event) => {
		event.preventDefault(); // prevent default form submission behavior
	});

	var passwordInput = document.getElementById("login-password");

	if (passwordInput.type == "password") {
		passwordInput.type = "text";
	} else {
		passwordInput.type = "password";
	}
}
function showPassword2() {
	const loginForm = document.getElementById("signup-page");
	loginForm.addEventListener("submit", (event) => {
		event.preventDefault(); // prevent default form submission behavior
	});

	var passwordInput = document.getElementById("signup-password");

	if (passwordInput.type == "password") {
		passwordInput.type = "text";
	} else {
		passwordInput.type = "password";
	}
}
function showPassword3() {
	const loginForm = document.getElementById("signup-page");
	loginForm.addEventListener("submit", (event) => {
		event.preventDefault(); // prevent default form submission behavior
	});

	var passwordInput = document.getElementById("repeat-password");

	if (passwordInput.type == "password") {
		passwordInput.type = "text";
	} else {
		passwordInput.type = "password";
	}
}

function burgerMenu() {
	nav = document.getElementsByClassName("nav-links");

	if (nav[0].style.display === "flex") {
		nav[0].style.display = "none";
	} else {
		nav[0].style.display = "flex";
	}
}
