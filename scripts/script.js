let loader = document.querySelector("#loader");
setTimeout(() => {
	loader.style.top = "-100dvh";
}, 1000);

function edit() {
	let editPage =  document.querySelector("#profile-edit");
	let showPage =  document.querySelector("#profile-show");
	editPage.style.display = "flex";
	showPage.style.display = "none";
}

function back() {
	let editPage =  document.querySelector("#profile-edit");
	let showPage =  document.querySelector("#profile-show");
	editPage.style.display = "none";
	showPage.style.display = "flex";
}

function save() {
	let toast = document.querySelector("#toast");
	back();
	setTimeout(() => {
		toast.style.right = "10px";
	}, 500);
	setTimeout(() => {
		toast.style.right = "-500px";
	}, 3000);
}