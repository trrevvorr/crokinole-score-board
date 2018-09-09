function add(points, team) {
	scoreEl = document.querySelector(".team." + team + " .score");
	oldScore = parseInt(scoreEl.textContent);
	newScore = oldScore + points;
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