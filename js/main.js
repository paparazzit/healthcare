// NAVBAR

let nav = document.querySelector("nav.main_nav");
let burger = document.querySelector(".burger");
let drop_down = document.querySelector(".main_nav .drop_down");
let nav_links = document.querySelectorAll(".link");

if (burger) {
	window.addEventListener("click", (e) => {
		if (!e.target.classList.contains("burger")) {
			close_nav();
		}
	});
	burger.addEventListener("click", (e) => {
		show_nav();
	});
}

function close_nav() {
	drop_down.classList.remove("show_nav");
}
function show_nav() {
	if (drop_down.classList.contains("show_nav")) {
		drop_down.classList.remove("show_nav");
		nav_links_transition(true);
	} else {
		drop_down.classList.add("show_nav");
		nav_links_transition();
	}
}

function nav_links_transition(remove) {
	if (!remove) {
		nav_links.forEach((link, index) => {
			link.style.transitionDelay = index * 0.09 + "s";
		});
	} else {
		nav_links.forEach((link, index) => {
			link.style.transitionDelay = 0 + "s";
		});
	}
}

// CARDS TEXT RESIZE

let card_section = document.querySelector("#prod_tech");
let card_content = document.querySelectorAll(".card_content");
if (card_section) {
	let card_height = 0;

	window.addEventListener("load", set_cardSize);
	window.addEventListener("resize", set_cardSize);
}

function set_cardSize() {
	let card_1 = card_content[0];
	let card_2 = card_content[1];

	card_2.style.height = card_1.offsetHeight + "px";
}

// IN VIEW

let ap_section = document.querySelectorAll(".in-view");

let height;
let width;

window.addEventListener("load", () => {
	setDefault();
	start();
});

window.addEventListener("resize", () => {
	setDefault();
});

function setDefault() {
	height = window.innerHeight;
	width = window.innerWidth;
}

function start() {
	let sredine = [];
	ap_section.forEach((section) => {
		let thershold = section.getAttribute("data-threshold");

		let item_h = section.offsetHeight;
		let item_pos = section.offsetTop;
		let show = item_pos - height * thershold + item_h;
		sredine.push(show);
	});
	console.log(sredine);

	window.addEventListener("scroll", () => {
		ap_section.forEach((section, index) => {
			if (sredine[index] < window.scrollY) {
				section.classList.add("appear");
			} else {
				section.classList.remove("appear");
			}
			if (window.scrollY > section.offsetTop + section.offsetHeight * 0.8) {
				section.classList.remove("appear");
			}
		});
	});
}
