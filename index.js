let limit = 2;
let point = 0;
const username = prompt("Please enter your username:");
function guess() {
	// 1) Generates a number between the range of 1 & litmit
	const guessNumber = Number(
		prompt(`Please enter a number between 1 & ${limit}`)
	);

  if (guessNumber >= limit + 1) return alert("out of range");

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	}

	const autoNumber = getRandomInt(1, limit + 1);
  
	// 2) set range has function parameter, and prompt player to generate number within the range
	if (guessNumber == autoNumber) {
		alert("Correct!!..next round!!");
		point = point += 1;
		limit = limit += 1;
		guess();
	} else {
		return alert(`Game Over!\nTotal Point: ${point}`);
	}
}

guess()