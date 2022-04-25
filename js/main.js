// import { CountUp } from "../node_modules/countup.js/dist/countUp.min";

// LOADING AND RESIZING
window.addEventListener("load", () => {
	if (card_section) {
		let card_height = 0;
		set_cardSize();
	}
});

window.addEventListener("resize", () => {
	if (card_section) {
		let card_height = 0;
		set_cardSize();
	}
});

// NAVBAR

let nav = document.querySelector("nav.main_nav");
let burger = document.querySelector(".burger");
let drop_down = document.querySelector(".main_nav .drop_down");
let nav_links = document.querySelectorAll(".link");
let page_header = document.querySelector(".page_header");
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
// if (card_section) {
// 	let card_height = 0;

// 	window.addEventListener("load", set_cardSize);
// 	window.addEventListener("resize", set_cardSize);
// }

function set_cardSize() {
	let card_1 = card_content[0];
	let card_2 = card_content[1];

	card_2.style.height = card_1.offsetHeight + "px";
}

// IN VIEW

let ap_section = document.querySelectorAll(".in-view");

let height;
let width;

let cont_article_1 = document.querySelector("#count_article_1");
let cont_article_2 = document.querySelector("#count_article_2");
let cont_article_3 = document.querySelector("#count_article_3");
let cont_1_opt = {
	startVal: 0,
	useGrouping: false,
	useEasing: true,
	smartEasingAmount: 200,
	duration: 3,
};
let cont_2_opt = {
	startVal: 0,
	useGrouping: false,
	useEasing: true,
	smartEasingAmount: 200,
	duration: 2,
};
let cont_3_opt = {
	startVal: 2999010,
	useGrouping: true,
	useEasing: true,
	separator: " ",
	smartEasingAmount: 400,
	duration: 3,
};
const count_1 = new CountUp("count-1", 25, cont_1_opt);
const count_2 = new CountUp("count-2", 700, cont_2_opt);
const count_3 = new CountUp("count-3", 3000000, cont_3_opt);

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
		if (!cont_article_1 && !cont_article_2 && !cont_article_3) {
			return;
		}
		if (cont_article_1.classList.contains("appear")) {
			if (!count_1.error) {
				count_1.start();
			}
		}
		if (cont_article_2.classList.contains("appear")) {
			if (!count_2.error) {
				setTimeout(() => {
					count_2.start();
				}, 300);
			}
		}

		if (cont_article_3.classList.contains("appear")) {
			if (!count_3.error) {
				setTimeout(() => {
					count_3.start();
				}, 500);
			}
		}
	});
	if (page_header) {
		page_header.classList.add("show_header");
	}
}

// PRODUCTS
let main_articles = document.querySelectorAll("article.main_article");

if (main_articles.length > 0) {
	main_articles.forEach((article) => {});
}
// ACCORDIAN

let accordion_btns = document.querySelectorAll(".accordion_btn");
if (accordion_btns.length > 0) {
	accordion_btns.forEach((btn) => {
		btn.addEventListener("click", show_accordion);
	});
}

function show_accordion() {
	let parent = this.parentElement.nextElementSibling;
	if (this.classList.contains("active")) {
		this.classList.remove("active");
		parent.style.maxHeight = 0 + "px";
	} else {
		parent.style.maxHeight = parent.scrollHeight + "px";
		this.classList.add("active");
	}
}
