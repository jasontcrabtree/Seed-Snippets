// Code for the scroll to select active area enhancement
(function() {
	"use strict";

	var sections = document.querySelectorAll("article [id]");
	var navLinks = document.querySelectorAll("nav ul li a");

	function getClosestSection() {
		var sectionsLength = sections.length;

		for (var index = 0; index < sectionsLength; index++) {
			if (isBelowScroll(sections.item(index))) break;
		}

		selectLink(sections.item(index).id);
	}

	function isBelowScroll(element) {
		var position = element.getBoundingClientRect();
		return position.top > 0;
	}

	function selectLink(id) {
		Array.prototype.forEach.call(navLinks, function(element) {
			element.classList.remove("is-selected");
		});

		document
			.querySelector('a[href="#' + id + '"]')
			.classList.add("is-selected");
	}

	window.addEventListener("scroll", function(event) {
		getClosestSection();
	});
})();
