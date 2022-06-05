const draggables = document.querySelectorAll(".draggable");
// console.log(draggables);
const containers = document.querySelectorAll(".container");
// console.log(containers);

draggables.forEach((draggable) => {
	draggable.addEventListener("dragstart", () => {
		// console.log("dragStart");
		draggable.classList.add("dragging");
	});

	draggable.addEventListener("dragend", () => {
		draggable.classList.remove("dragging");
	});
});

containers.forEach((container) => {
	container.addEventListener("dragover", (e) => {
		e.preventDefault();
	});

	container.addEventListener("drop", () => {
		console.log(container.id);
		const draggable = document.querySelector(".dragging");
		const draggableId = document.querySelector(".dragging").id;
		console.log(draggableId);
		let IdList = [];
		for (element of Array.from(container.children)) {
			IdList.push(element.id);
		}
		console.log(IdList);
		if (IdList.indexOf(draggableId) === -1) {
			const draggable = document.querySelector(".dragging");
			container.appendChild(draggable);
		}
		console.log("drop");
	});
});
