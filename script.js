function add(points, team) {
	$scoreEl = $(".team." + team + " .score");
	oldScore = parseInt($scoreEl.text());
	newScore = oldScore + points;
	$scoreEl.text(newScore);
}