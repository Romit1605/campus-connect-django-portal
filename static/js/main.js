// Campus Connect — main.js
// Confirms that the custom JavaScript file loaded successfully.
console.log("Campus Connect: static JS file loaded successfully.");

// Add a small scroll effect to the navbar for a more polished feel.
document.addEventListener("DOMContentLoaded", function () {
	const navbar = document.querySelector(".cc-navbar");

	if (!navbar) {
		return;
	}

	function updateNavbarShadow() {
		if (window.scrollY > 16) {
			navbar.classList.add("cc-navbar-scrolled");
		} else {
			navbar.classList.remove("cc-navbar-scrolled");
		}
	}

	updateNavbarShadow();
	window.addEventListener("scroll", updateNavbarShadow, { passive: true });
});
