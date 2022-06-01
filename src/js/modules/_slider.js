const [btnLeft, btnRight] = document.getElementsByClassName('arrow');
const slider = document.getElementById('slider');
const slides = slider.getElementsByClassName('section-destinations__slide');
const dotes = document.getElementsByClassName('section-destinations__circle');

let currentIndex = 1;

// -----------------------------------------------------------------------------------------------------

function toggleDots(direction) {

  dotes[currentIndex].classList.remove('active');

  currentIndex = ( currentIndex + ( direction === 'right' ? 1 : -1 ) ) % dotes.length;
  currentIndex = currentIndex < 0 ? dotes.length - 1 : currentIndex;

  dotes[currentIndex].classList.add('active'); 
}

function activateDots(dot) {

  let dotIndex = [...dotes].indexOf(dot);

  if(dotIndex === currentIndex) {
    return;
  }

  (currentIndex - dotIndex === 1 || (currentIndex === 0 && dotIndex === dotes.length - 1)) && moveSlider('left');
  (dotIndex - currentIndex === 1 || (dotIndex === 0 && currentIndex === dotes.length - 1)) && moveSlider('right');
}

[...dotes].forEach(dot => dot.onclick = () => activateDots(dot));

// -----------------------------------------------------------------------------------------------------

function moveSlider(direction) {

  [btnLeft, btnRight, ...dotes].forEach(el => el.onclick = null);

  slider.classList.add(direction);

  toggleDots(direction);

  slider.onanimationend = () => {

    direction === 'right' && slides[slides.length - 1].after(slides[0]);
    direction === 'left' && slides[0].before(slides[slides.length - 1]);

    slider.classList.remove(direction);

    btnLeft.onclick = () => moveSlider('left');
    btnRight.onclick = () => moveSlider('right');
    [...dotes].forEach(dot => dot.onclick = () => activateDots(dot));
  }
}

// -----------------------------------------------------------------------------------------------------

btnLeft.onclick = () => moveSlider('left');
btnRight.onclick = () => moveSlider('right');