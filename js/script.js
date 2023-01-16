// document querySelectors

const mainGameView = document.querySelector('#mainGameView')
const startView = document.querySelector('#start')
const title = document.querySelector('#title')
const reset = document.querySelector('#reset') 
const roundEl = document.querySelector('#round')
const headerEl = document.querySelector('.headerParaWrap')


const scoreEL = document.querySelector('#score')
const highScoreEl = document.querySelector('#highScoreWrap')
const nameWrap = document.querySelector('#nameWrap')
const guessImg= document.querySelector('#guessImg')
const resultWrap = document.querySelector('#resultWrap')
const result = document.querySelector('#result')
const resultView = document.querySelector('#resultView')
const spinner = document.querySelector('#spinner')


// Start variables
let albumArray = albums.map(a =>({name: a.name, img: a.cln_image}))
let level;
let points = 0;
let answers = [];
let guesses = 0;
let round = 1;
let score = [];
console.log(albumArray)

// Start buttons 
document.querySelector('#easyBtn').addEventListener('click', e => {
  e.preventDefault();
	startGame(10);	
});
document.querySelector('#mediumBtn').addEventListener('click', e => {
  e.preventDefault();
	startGame(25);	
});
document.querySelector('#hardBtn').addEventListener('click', e => {
  e.preventDefault();
	startGame(albumArray.length);	
});


// When game is started
const startGame = (x) => {
	startView.classList.add('hide')
  headerEl.classList.add('hide')
	mainGameView.classList.remove('hide')
	reset.classList.remove('hide')
	title.innerText = `${x} Albums To guess!`
	roundEl.innerText = `[ Round ${round} ]`
	createDOM()
	return level = x
};


// Creating DOM
const createDOM = () => {
	if (albumArray.length === 0) {
			// resetBackground();
			// resultViewDOM();
	} else	if ( albumArray.length <= 3) {
			// resetBackground();
			guessImg.src = albumArray[0].img

		} else {
		names = albumArray.slice(0,4)
		shuffle(names)
		let element = ''
		for (let i = 0; i <= 3; i++) {
			element += `<button class="name" id="name-${[i]}"> ${names[i].name}</button>`;
		}
		nameWrap.innerHTML = element
		guessImg.src = albumArray[0].img
	}
};

// Fisher-Yates shuffle function
const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};
shuffle(albumArray)
