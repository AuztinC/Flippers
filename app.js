const cardCont = document.querySelector("#card-cont")
let images = []
let state = {
	cards: [],
}



async function getPics() {
	const imgData = await(await fetch("https://pixabay.com/api/?key=35904460-6da0f483724d8177c3f681e67&q=dog&per_page=100")).json()
	images = imgData.hits
	// console.log(images)
	
}

async function setCard(){
	await getPics()
	for(let i = 0; i < 30; i++){
		let card = {
			img: images[Math.round(Math.random()*images.length)].largeImageURL,
		}
		state.cards.push(card)
	}
	// console.log(state.cards)
	if(state.cards.length === 30){
		render()
	}
}
setCard()

function handleClick(element){
	// console.log(element.children[0])
	element.children[0].style.transform = "rotateY(0deg)"
}

function render() {
	// console.log(state.cards)
	const picHtml = state.cards.map((el)=>{
		return `
		<div class="flip-card" onclick="handleClick(this)">
			<div class="flip-card-inner">
				<div class="flip-card-front">
				<img src=${el.img} alt="Avatar" >
				</div>
				<div class="flip-card-back" >
				<p>We love that guy</p>
				</div>
			</div>
		</div>
		`
	})
	cardCont.innerHTML = picHtml.join('')
}
// render()