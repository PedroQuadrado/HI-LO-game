const card = document.getElementById("card");
const lastCard = document.getElementById("lastCard");
const status = document.getElementById("status");
const wins = document.getElementById("wins");
let winCount = 0;

function loadCard() {
  randomCard = Math.floor(Math.random() * 13 + 2);
  randomSuit = Math.floor(Math.random() * 4 + 1);
  randomCardNumber = randomCard;
  switch (randomCard) {
    case 14:
      randomCard = "A";
      break;
    case 11:
      randomCard = "Q";
      break;
    case 12:
      randomCard = "J";
      break;
    case 13:
      randomCard = "k";
      break;
    default:
      break;
  }
  switch (randomSuit) {
    case 1:
      randomSuit = "C";
      break;
    case 2:
      randomSuit = "D";
      break;
    case 3:
      randomSuit = "S";
      break;
    case 4:
      randomSuit = "H";
      break;
    default:
      break;
  }
  card.style.backgroundImage = "url(PNG/" + randomCard + randomSuit + ".png";
}
function nCard() {
  newCard = Math.floor(Math.random() * 13 + 2);
  newSuit = Math.floor(Math.random() * 4 + 1);
  newCardNumber = newCard;
  switch (newCard) {
    case 14:
      newCard = "A";
      break;
    case 11:
      newCard = "Q";
      break;
    case 12:
      newCard = "J";
      break;
    case 13:
      newCard = "k";
      break;
    default:
      break;
  }
  switch (newSuit) {
    case 1:
      newSuit = "C";
      break;
    case 2:
      newSuit = "D";
      break;
    case 3:
      newSuit = "S";
      break;
    case 4:
      newSuit = "H";
      break;
    default:
      break;
  }
  console.log(randomCardNumber, newCardNumber);

  if (option == "h" && newCardNumber > randomCardNumber) {
    status.innerHTML = "YOU WIN";
    winCount++;
    clear();
  } else if (option == "l" && newCardNumber < randomCardNumber) {
    status.innerHTML = "YOU WIN";
    winCount++;
    clear();
  } else if (newCardNumber == randomCardNumber) {
    status.innerHTML = "DRAW";
    clear();
  } else {
    status.innerHTML = "YOU LOSE";
    clear();
  }
}
function clear() {
  lastCard.style.backgroundImage =
    "url(PNG/" + randomCard + randomSuit + ".png";
  card.style.backgroundImage = "url(PNG/" + newCard + newSuit + ".png";
  randomCard = newCard;
  randomSuit = newSuit;
  randomCardNumber = newCardNumber;
  wins.innerText = winCount;
}
function hiOption() {
  option = "h";
  nCard();
}
function loOption() {
  option = "l";
  nCard();
}
