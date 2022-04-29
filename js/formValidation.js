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
		};
		formValidator(options, upload_file);
	});
	upload_file.addEventListener("change", () => {
		checkUpload(upload_file);
	});
}

function formValidator(opt, file) {
	let errors = {};
	let form_data = {};
	let uploadFile = true;

	for (const prop in opt) {
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
	if (file) {
		uploadFile = checkUpload(file);
		file.nextElementSibling.classList.remove("error");
		if (!uploadFile) {
			errors.fileError = uploadFile;
			file.nextElementSibling.classList.add("error");
		}
	}

	if (!checkErrors(errors)) {
		return;
	}

	form_data = packData(opt);
	if (file && uploadFile) {
		form_data.fileName = uploadFile;
	}

	console.log(form_data);
}

function checkInput(input) {
	console.log(input);
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
	return file_name;
}
