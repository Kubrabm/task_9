const object = document.getElementById("object");
const area = document.getElementById("area");

let left = 0;
let up = 0;


document.addEventListener("keydown", action);

function action(event) {
	if (event.key == "ArrowRight") {
		left += 10;
	} else if (event.key == "ArrowLeft") {
		left -= 10;
	} else if (event.key == "ArrowUp") {
		up -= 10;
	} else if (event.key == "ArrowDown") {
		up += 10;
	}

	object.style.left = left + "px";
	object.style.top = up + "px";

	if (left >= 600 ) {
		area.innerHTML = "<h2>Game over!</h2>";
	}
}
