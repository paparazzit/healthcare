let play_btn = document.querySelector("#play_btn");

let video_popUp = document.querySelector("#video_popUp");
let video_src = "";
let video_iFrame;
play_btn.addEventListener("click", show_video);

function show_video() {
	video_iFrame = video_popUp.querySelector("iframe");
	video_src = this.parentElement.getAttribute("data-src");

	video_iFrame.setAttribute("src", video_src);
	video_popUp.classList.add("show_popUp");
	setTimeout(() => {
		video_popUp.classList.add("activate");
	}, 50);
}

if (video_popUp) {
	video_popUp.addEventListener("click", close_video);
}

function close_video() {
	video_iFrame.removeAttribute("src");
	video_popUp.classList.remove("show_popUp");
	video_popUp.classList.remove("activate");
}
