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

	console.log(card_content[0].offsetHeight);
	window.addEventListener("load", set_cardSize);
	window.addEventListener("resize", set_cardSize);
}

function set_cardSize() {
	let card_1 = card_content[0];
	let card_2 = card_content[1];

	card_2.style.height = card_1.offsetHeight + "px";
}
