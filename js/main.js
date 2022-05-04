// import { CountUp } from "../node_modules/countup.js/dist/countUp.min";

// LOADING AND RESIZING
let he = 0;
let sredine = [];
let win_width = window.innerWidth;

window.addEventListener("load", () => {
	win_width = window.innerWidth;
	setDefault();
	start();
	if (card_section) {
		let card_height = 0;
		set_cardSize();
	}
	if (window.innerWidth > 1040) {
		if (main_articles.length > 0) {
			main_article_resize();
		}
	}
});

window.addEventListener("resize", () => {
	setDefault();
	win_width = window.innerWidth;
	if (card_section) {
		let card_height = 0;
		set_cardSize();
	}
	if (window.innerWidth > 1040) {
		if (main_articles.length > 0) {
			main_article_resize();
		}
	} else {
		main_article_remove_Style();
	}
});
// LOADER
function loader_anim() {
	loader.classList.add("hide");
	setTimeout(function () {
		loader.classList.add("remove");
	}, 400);
}

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
let width = window.innerWidth;

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

function setDefault() {
	height = window.innerHeight;
	width = window.innerWidth;
}

function start() {
	if (page_header) {
		page_header.classList.add("show_header");
	}
}

// OBSERVER

let obs_options = {
	root: null,
	rootMargin: "-110px -50px",
	threshold: 0.1,
};
const observer = new IntersectionObserver(inView, obs_options);
ap_section.forEach((section) => {
	observer.observe(section);
});
function inView(entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			entry.target.classList.remove("appear");
			return;
		}
		entry.target.classList.add("appear");
		if (entry.target.classList.contains("counter_sec")) {
			if (!count_1.error) {
				count_1.start();
			}
			if (!count_2.error) {
				setTimeout(() => {
					count_2.start();
				}, 300);
			}
			if (!count_3.error) {
				setTimeout(() => {
					count_3.start();
				}, 500);
			}
			observer.unobserve(entry.target);
		}
	});
}

// PRODUCTS
let main_articles = document.querySelectorAll("article.main_article");

let max_artic_h = 0;
let text_content = [];
function main_article_resize() {
	text_content = [];

	main_articles.forEach((art) => {
		let text = art.children[1].scrollHeight;
		text_content.push(text);
	});
	max_artic_h = Math.max(...text_content);
	main_articles.forEach((art) => {
		art.style.height = 100 + max_artic_h + "px";
	});
}

function main_article_remove_Style() {
	main_articles.forEach((art) => {
		art.removeAttribute("style");
	});
}

// ACCORDIAN
let accordions = document.querySelectorAll("article.accordion");
if (accordions.length > 0) {
	accordions.forEach((accord) => {
		accord.addEventListener("click", show_accordion);
	});
}

function show_accordion() {
	let children_all = this.children;
	let arrow = children_all[0].children[1];
	let content = children_all[1];

	if (this.classList.contains("active")) {
		this.classList.remove("active");
		content.style.maxHeight = 0 + "px";
	} else {
		content.style.maxHeight = content.scrollHeight + "px";
		this.classList.add("active");
	}
}

// PRIVACY POLICY DROP DOWN

let privacy_btns = document.querySelectorAll("article .pp_h");
let pp_articles = document.querySelectorAll("section.privacy article");

if (privacy_btns) {
	privacy_btns.forEach((pp_btn) => {
		pp_btn.addEventListener("click", show_pp);
	});
	pp_articles.forEach((art) => {
		art.setAttribute("data-cont", 0);
	});
}
let cont = 0;
function show_pp() {
	pp_articles.forEach((art) => {
		art.classList.remove("active");
		art.children[1].style.maxHeight = 0 + "px";
	});

	pp_activate(this.parentElement);
}

function pp_activate(item) {
	if (item.classList.contains("active")) {
		item.classList.remove("active");
	} else {
		if (item.getAttribute("data-cont") == 0) {
			item.classList.add("active");
			item.children[1].style.maxHeight = item.children[1].scrollHeight + "px";

			pp_articles.forEach((art) => {
				art.setAttribute("data-cont", 0);
			});
			cont = 1;
			item.setAttribute("data-cont", cont);
		} else {
			item.setAttribute("data-cont", 0);
			item.children[1].style.maxHeight = 0 + "px";
			cont = 0;
		}
	}
}

// TIMELINE

let areas = document.querySelectorAll(".time_line .area");
let bubbles = document.querySelectorAll(".text-bubble");
let points = document.querySelectorAll(".point");
let years = document.querySelectorAll(".year");
let tl_section = document.querySelector("section.time_line");
let text = "";
let mob_text = document.querySelector(".text-area .text-bubble");
if (areas.length > 0) {
	console.log(areas);
	areas.forEach((area) => {
		area.addEventListener("click", show_text_bubble);
	});
	window.addEventListener("click", (e) => {
		if (
			e.target.classList.contains("area") ||
			e.target.classList.contains("year")
		) {
			return;
		} else {
			remove_bubble();
		}
	});
}

function show_text_bubble() {
	center_window.apply(this);
	let bubble = this.children[0];
	let point = this.children[1];
	let year = this.children[2];

	remove_bubble();
	point.classList.add("active");
	year.classList.add("active");
	if (win_width > 550) {
		bubble.classList.add("show");
	} else {
		text = bubble.innerHTML;

		setTimeout(() => {
			mob_text.classList.add("show");
			mob_text.innerHTML = text;
		}, 300);
	}
}

function remove_bubble() {
	mob_text.classList.remove("mob");
	bubbles.forEach((blb) => {
		blb.classList.remove("show");
	});
	points.forEach((pnt) => {
		pnt.classList.remove("active");
	});
	years.forEach((year) => {
		year.classList.remove("active");
	});
}

function center_window() {
	tl_section.scrollIntoView({
		behavior: "smooth",
		block: "center",
		inline: "nearest",
	});
}
