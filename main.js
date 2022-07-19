const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

//FAQ

let accordion = document.getElementsByClassName("accordion");
const totalAccordions = accordion.length;

for (let i = 0; i < totalAccordions; i++) {
	accordion[i].addEventListener("click", (e) => {
		let panel = e.target.nextElementSibling;

		if (panel.classList[1] === "panel-closed") {
			e.target.classList.toggle("accordion-active");
			panel.classList.toggle("panel-open");
			closeAllExcept(panel);
		}
	});
}

const closeAllExcept = (pan) => {
	for (let i = 0; i < totalAccordions; i++) {
		let panelToClose = accordion[i].nextElementSibling;
		if (panelToClose !== pan) {
			accordion[i].classList.remove("accordion-active");
			panelToClose.classList.remove("panel-open");
		}
	}
}