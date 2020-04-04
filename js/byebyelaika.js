<<<<<<< Updated upstream
var changeState = function (state) {
	document.body.className = 'body-state' + state;
}

if (state == 2) {
	document.getElementById('countdown').innerHTML() = 9;
};
=======
var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;


	// countdown
	if (state == 2) {
		timer = setInterval(function () {
				countdownNumber = countdownNumber -1;
				document.getElementById('countdown').innerHTML = countdownNumber;
			if (countdownNumber <= 0) {
				changeState(3);
			};
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random()*8);

			console.log('randomNumber:', randomNumber)

			// success
			if (randomNumber > 4) {
				changeState(4);

			// fail
			} else {
				changeState(5);
			}
		}, 2000);
	}
}

>>>>>>> Stashed changes
