// function moveDown() {
	 
// 	listEleImg[activeIndex].classList.remove('active');
// 	listThumbs[activeIndex].classList.remove('active');
// 	listEleText[activeIndex].classList.remove('active');
	
// 	activeIndex++;
// 	if (activeIndex === listEleImg.length) {
// 		activeIndex = 0;
// 	}
	
// 	listEleImg[activeIndex].classList.add('active');
// 	listThumbs[activeIndex].classList.add('active');
// 	listEleText[activeIndex].classList.add('active');
// 	;
// }

// function moveUp () {
	 
// 	listEleImg[activeIndex].classList.remove('active');
// 	listThumbs[activeIndex].classList.remove('active');
// 	listEleText[activeIndex].classList.remove('active');
	
// 	if (activeIndex === 0) {
// 		activeIndex = listEleImg.length;
// 	}
// 	activeIndex--;

	
// 	listEleImg[activeIndex].classList.add('active');
// 	listThumbs[activeIndex].classList.add('active');
// 	listEleText[activeIndex].classList.add('active');
	
// }

// const arrImages = [
//     {
//      	image: '01.webp',
//      	title: "Marvel's Spiderman Miles Morale",
//      	text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     },
//     {
//      	image: '02.webp',
//      	title: 'Ratchet & Clank: Rift Apart',
//      	text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     },
//     {
//      	image: '03.webp',
//      	title: 'Fortnite',
//      	text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
//     },
//     {
//      	image: '04.webp',
//      	title: 'Stray',
//      	text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     },
//     {
//     	image: '05.webp',
//      	title: "Marvel's Avengers",
//      	text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
//     },
//  ];
	
//  const timeSlider = 1.5*1000;
//  let direction = 1;
//  let isAutoplayActive = true;

//  const eleSlider = document.querySelector('.slider-viewer');
//  const eleButtonUp = document.querySelector('.button-up');
//  const eleButtonDown = document.querySelector('.button-down');
//  const eleSliderThumbs = document.querySelector('.thumbs');
 
 

	 
// 	 if (i === 0) {
// 		 eleImg.classList.add('active');
// 		 eleText.classList.add('active');
// 	 }

	 
// 	 eleSlider.append(eleImg);
// 	 eleSlider.append(eleText);
 
// 	 const eleThumb = document.createElement('img');
// 	 eleThumb.src = `img/${arrImages[i].image}`;
// 	 eleThumb.classList.add('thumb-img');
// 	 if (i === 0) {
// 		 eleThumb.classList.add('active');
// 	 }
// 	 eleSliderThumbs.append(eleThumb);
//  }
 
//  let idInterval =setInterval(() => {
// 	if (direction > 0) {
// 		moveDown();
// 	} else {
// 		moveUp()
// 	}
//  },timeSlider);

//  document.querySelector('.btn-invert').addEventListener('click',() => direction*= -1);

//  document.querySelector('.btn-start-stop').addEventListener('click',function() {
// 	if (this.dataset.functionality === 'stop'){
// 		clearInterval(idInterval);
// 		this.innerHTML='Start';
// 		this.dataset.functionality = 'start';
// 	} else {
// 		 idInterval =setInterval(() => {
// 			if (direction > 0) {
// 				moveDown();
// 			} else {
// 				moveUp()
// 			}
// 		 },timeSlider);
// 		this.innerHTML='Stop';
// 		this.dataset.functionality = 'stop';
// 	}
//  } );

//  const listEleImg = document.querySelectorAll('.slider-img'); 
//  const listThumbs = document.querySelectorAll('.thumb-img');
//  const listEleText = document.querySelectorAll('.text')
 
//  let activeIndex = 0;
 
 
 
//  eleButtonDown.addEventListener('click', moveDown);
 
//  eleButtonUp.addEventListener('click', moveUp )

// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
// Buon lavoro e buon divertimento!

new Vue({
 el:'.slider',
 data:{
    arrImages:[
    {
        image: '01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: '03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ],
 },
});