function add(points, team) {
	var scoreEl = document.querySelector(".team." + team + " .score");
	var oldScore = parseInt(scoreEl.textContent);
	var newScore = oldScore + points;
	newScore = validateScore(newScore);
	scoreEl.textContent = newScore;
}

function validateScore(score) {
	score = parseInt(score);
	
	if (isNaN(score)) {
		score = 0;
	}

	if (score < 0) {
		score = 0;
	}

	return score;
}

function setTheme(theme) {
	document.body.setAttribute("theme", theme);
}
