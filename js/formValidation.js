let form1 = document.querySelector("form#career_form");

if (form1) {
	let upload_file = document.querySelector('#career_form input[type="file"]');
	form1.addEventListener("submit", (e) => {
		e.preventDefault();
		let name = document.querySelector('#career_form input[name="name"]');
		let email = document.querySelector('#career_form input[name="email"]');
		let job = document.querySelector('#career_form input[name="job"]');
		let loc = document.querySelector('#career_form input[name="location"]');
		let msg = document.querySelector('#career_form textarea[name="msg"]');

		let options = {
			name,
			email,
			job,
			location: loc,
			message: msg,
			url: "send_mail_att.php",
		};
		formValidator(options, upload_file);
	});
	upload_file.addEventListener("change", () => {
		checkUpload(upload_file);
	});
}

let form_contact = document.querySelector("#contact_form");
if (form_contact) {
	form_contact.addEventListener("submit", (e) => {
		e.preventDefault();
		let name = document.querySelector('#contact_form input[name="name"]');
		let email = document.querySelector('#contact_form input[name="email"]');
		let company = document.querySelector('#contact_form input[name="company"]');
		let msg = document.querySelector('#contact_form textarea[name="msg"]');
		let submit_btn = document.querySelector("#contact_form button#submit_btn");

		let form_info = document.querySelector("form #form_info");
		let options = {
			name,
			email,
			company: company,
			message: msg,
			url: "send_email.php",
		};
		formValidator(options);
	});
}

function formValidator(opt, file) {
	let errors = {};
	let form_data = {};
	let uploadFile = true;

	for (const prop in opt) {
		let info_wrapper = opt[prop].nextElementSibling;

		if (opt[prop].tagName === "INPUT" || opt[prop].tagName === "TEXTAREA") {
			let info_wrapper = opt[prop].nextElementSibling;
			info_wrapper.classList.remove("show");
			info_wrapper.classList.remove("anim");
			opt[prop].classList.remove("error");

			if (opt[prop].value === "") {
				errors[prop] = `${prop} Error`;
				opt[prop].classList.add("error");
				info_wrapper.classList.add("show");
				setTimeout(() => {
					info_wrapper.classList.add("anim");
				}, 50);
			}
		}
	}

	if (file) {
		uploadFile = checkUpload(file);
		file.nextElementSibling.classList.remove("error");
		if (!uploadFile) {
			errors.fileError = uploadFile;
			file.nextElementSibling.classList.add("error");
		}
	}

	if (!checkErrors(errors)) {
		form_info.innerText = "Please fill all the fields";
		return;
	}

	form_data = packData(opt);
	if (file && uploadFile) {
		form_data.fileName = uploadFile;
	}

	if (Object.keys(form_data).length > 0) {
		prepareEmail(form_data);
	}
}

function checkErrors(errors) {
	let err_size = Object.keys(errors).length;

	if (err_size > 0) {
		return false;
	} else {
		return true;
	}
}

function packData(opt) {
	let fd = {};
	for (const prop in opt) {
		fd[prop] = opt[prop].value;
		if (!opt[prop].value) {
			fd[prop] = opt[prop];
		}
	}
	return fd;
}
function checkUpload(file) {
	let fileList = file.files[0];
	let info = file.nextElementSibling.children[1];

	if (!fileList) {
		return false;
	}
	let file_name = fileList.name;
	let size = 3_000_000;
	let allowed = [".txt", ".pdf", ".docx"];
	let file_ext = file_name.split(".");
	let ok = false;

	if (file_ext[1].length === 3 || file_ext[1].length === 4) {
		file_ext[1] = `.${file_ext[1]}`;
	}

	allowed.forEach((ext) => {
		if (ext === file_ext[1]) {
			ok = true;
			return ok;
		}
	});

	info.innerHTML = file_name;
	if (!ok) {
		info.innerHTML = "Wrong File Format";
		return;
	}
	return fileList;
}

function prepareEmail(form_data) {
	let fd = new FormData();

	for (const prop in form_data) {
		// console.log(form_data[prop]);
		fd.append(`${prop}`, form_data[prop]);
	}
	sendEmail(fd, form_data.url);
}

function sendEmail(fd, url) {
	let submit_btn = document.querySelector("button#submit_btn");

	submit_btn.classList.add("sending");
	form_info.innerText = "Attaching files";

	axios
		.post(url, fd, {
			headers: {
				"Content-type": "multipart/form-data",
				"MIME-Version": "1.0",
			},
		})
		.then((res) => {
			console.log(res.data);
			form_info.innerText = res.data;
			submit_btn.classList.remove("sending");
			submit_btn.classList.add("success");
		})
		.catch((err) => {
			submit_btn.classList.remove("sending");
			submit_btn.classList.add("failed");
			console.log(err);
			form_info.innerText = err.data;
		});
}
