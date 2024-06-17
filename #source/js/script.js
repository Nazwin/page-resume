@@include("modal.js")
@@include("functions.js")

let loader = document.querySelector(".loading");
function closeLoading(){
	loader.classList.add("hidden");
	setTimeout(function(){
		loader.classList.add("ready");
	}, 650)
}

let tasksColumn = document.querySelectorAll(".tasks__body>.tasks__column");
let accordion = document.querySelector(".faq__accordion");

window.onload = async function(){
	let url = "https://script.google.com/macros/s/AKfycbxBRLm96lE6iUIGVQ-y06Lj0yh_oUaRnNDTXEwIK_8A-PeprmPMxmHWt_bWmiEaW3dW/exec";


	async function main(){
		let obj;
		let query = await fetch(url).then(response =>response.json()).then(data => data);
		let elem = document.querySelectorAll("ul.skills__list");
		query.skills.forEach(el => {
			elem[0].insertAdjacentHTML('beforeend', `<li class="skill__item">${el.value}</li>`)
		})

		// query.tasks.forEach((el, i) => {
		// 	let tech = "";
		// 	el.tech.forEach(item =>{
		// 		tech += `<li>${item}</li>`;
		// 	})
		// 	let item =
		// 	`<div class="tasks__item task">
		// 		<div class="task__wrapper">
		// 			<div class="task__header">
		// 				<a href="${el.link ? el.link : "#"}" ${!el.link ? "class=\"not-ready\"" : ""}>
		// 					<img src="img/external_link_icon.svg" alt="">
		// 				</a>
		// 			</div>
		// 			<div class="task__title">${el.title}</div>
		// 			<div class="task__info">${el.info}</div>
		// 			<div class="task__tech">
		// 				<ul>
		// 					${tech}
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</div>`;
		// 	if(i <= query.tasks.length / 2 - 1){
		// 		tasksColumn[0].insertAdjacentHTML('beforeend', item);
		// 	} else {
		// 		tasksColumn[1].insertAdjacentHTML('beforeend', item);
		// 	}
		// })

		query.faq.forEach(el => {
			let item =
			`<div class="accordion__item questions__item">
				<div class="accordion__header">
					<span></span>
					<h3 class="questions__title">${el.question}</h3>
				</div>
				<div class="accordion__collapse collapse">
					<div class="collapse__content">${el.answer}</div>
				</div>
			</div>`;
			accordion.insertAdjacentHTML('beforeend', item);
		})


		closeLoading();
	}
	await main()
	setTimeout(function(){
		typeText();
	}, 1000)
	// Accordion
	let selector = document.querySelectorAll('.accordion__item');
	selector.forEach((el, i) => {
		el.children[0].addEventListener('click', event => {
			el.children[1].classList.toggle("open")
			el.children[0].classList.toggle("open")
			

			// Single accordion item
			selector.forEach((elem, iterator) => {
				if(iterator != i){
					elem.children[1].classList.remove("open")
					elem.children[0].classList.remove("open")
				}
			})
		})
	})

}