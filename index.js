// image array

//  used to randomize images
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = 'images/dice' + randomNumber1 + '.png';
let randomDiceImage2 = 'images/dice' + randomNumber2 + '.png';

function randomImage() {
  let image1 = document.querySelector('img.img1');
  let image2 = document.querySelector('img.img2');
  let h1 = document.querySelector('h1');
  image1.setAttribute('src', randomDiceImage);
  image2.setAttribute('src', randomDiceImage2);

  if (randomDiceImage > randomDiceImage2) {
    h1.innerHTML = '🚩 Player 1 Wins!';
  } else if (randomDiceImage < randomDiceImage2) {
    h1.innerHTML = 'Player 2 Wins 🚩';
  } else {
    h1.innerHTML = ' Draw!';
  }
}

randomImage();
