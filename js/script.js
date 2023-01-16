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



// Start variables
let albumArray = albums.map(a =>({name: a.name, img: a.cln_image, og_img: a.og_image}))
let level;
let points = 0;
let answers = [];
let guesses = 0;
let round = 1;
let score = [];


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
// reset button
document.querySelector('#reset').addEventListener('click', e => {
  result.classList.remove('hide')	;
	result.innerHTML = `<h3>Resetting and restaring the game...</h3>`;
	resultView.innerHTML = '';
	highScoreEl.classList.add('hide')
	mainGameView.classList.add('hide');
	resultView.classList.add('hide');
	resultWrap.classList.add('hide');
	reset.classList.add('hide');
  albumArray = albums.map(a =>({name: a.name, img: a.cln_image, og_img: a.og_image}))
	shuffle(albumArray);
	round ++
	points = 0;
	guesses = 0;
	level = 0;
	answers = [];
	setTimeout(function(){ 
		result.classList.add('hide');
		startView.classList.remove('hide');
    headerEl.classList.remove('hide')
		},1000);
});

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
			resetBackground();
			resultViewDOM();
	} else	if ( albumArray.length <= 3) {
			resetBackground();
			guessImg.src = albumArray[0].img
      shuffle(names)

		} else {
		names = albumArray.slice(0,4)
		let element = ''
		for (let i = 0; i <= 3; i++) {
			element += `<button class="name" id="name-${[i]}"> ${names[i].name}</button>`;
		}
		nameWrap.innerHTML = element
		guessImg.src = albumArray[0].img
	}
};

const resetBackground = () => { // Removes background-color of button
	document.getElementById('name-0').classList.remove('answerR')
	document.getElementById('name-0').classList.remove('answerW')
	document.getElementById('name-1').classList.remove('answerR')
	document.getElementById('name-1').classList.remove('answerW')
	document.getElementById('name-2').classList.remove('answerR')
	document.getElementById('name-2').classList.remove('answerW')
	document.getElementById('name-3').classList.remove('answerR')
	document.getElementById('name-3').classList.remove('answerW')
}

// Disable buttons after click
const disableBtn = () =>  {
  document.querySelector('name-0').disable = true
  document.querySelector('name-1').disable = true
  document.querySelector('name-2').disable = true
  document.querySelector('name-3').disable = true
}

// Main click-event
nameWrap.addEventListener('click', e => {
  e.preventDefault()

  if (e.target.tagName === 'DIV') {
    return
  }
	if (guesses == level){
		mainGameView.classList.add('hide')
		resultWrap.classList.remove('hide')
		result.classList.remove('hide')
		result.innerHTML = `<h4>[ Round ${round}]</h4> <h4>You guessed ${points} albums out of ${level} right!</h4> `
		scoreKeep();
		albumArray.shift()
		resultViewDOM()
  
	} else if (e.target.innerText === albumArray[0].name) {
		e.target.classList.add('answerR')


		points++
		guesses++

		answers.push({name: albumArray[0].name, img: albumArray[0].og_img, answer: 'answerR', yourAnswer: e.target.innerText})

		albumArray.shift()
		setTimeout( () => {
			createDOM()
		}, 650)
	} else {
		e.target.classList.add('answerW')
		if (document.getElementById('name-0').innerText === albumArray[0].name ){
			document.getElementById('name-0').classList.add('answerR')

		}
		if (document.getElementById('name-1').innerText === albumArray[0].name ){
			document.getElementById('name-1').classList.add('answerR')

		}
		if ( document.getElementById('name-2').innerText === albumArray[0].name ){
			document.getElementById('name-2').classList.add('answerR')

		}
		if (document.getElementById('name-3').innerText === albumArray[0].name ){
			document.getElementById('name-3').classList.add('answerR')

		}
		guesses++
		answers.push({name: albumArray[0].name, img: albumArray[0].og_img, answer: 'answerW', yourAnswer: e.target.innerText})
		albumArray.shift()
   
		setTimeout( () => {
			createDOM()
		},650)
	}
});
const scoreKeep = () => {
	score.push({round: round, points: points, numName: level})
	highScoreEl.classList.remove('hide')
	scoreEL.innerHTML = score.map( item => `<h5>Round ${item.round}: ${item.points}/${item.numName} right!</h5>`).join('')
}
const resultViewDOM = () => {
	setTimeout( () => {
		resultView.classList.remove('hide')
		resultView.innerHTML = answers.map( item => `<li class="${item.answer}"><img src="${item.img}"><span>${item.name}<br> Your guess: ${item.yourAnswer}</span></li>`).join('') 
},500)										
}