function submitAnswers () {
	var total = 5;
	var score = 0;

	// Get Input

	var q1 = document.forms["Form"]["q1"].value;
	var q2 = document.forms["Form"]["q2"].value;
	var q3 = document.forms["Form"]["q3"].value;
	var q4 = document.forms["Form"]["q4"].value;
	var q5 = document.forms["Form"]["q5"].value;



	// check for unattempted questions
	for(i = 1; i <= total; i++){
		if(eval('q' + i) == null || eval('q' + i) == ''){
			alert('Missed question q' + i);
			return false;
		}
	}



	// Correct Answers
	var answers = ["b", "a", "d", "b", "d"];



	//Check Answers
	for (var i = 1; i <= total; i++) {
		if(eval('q' + i) == answers[i - 1]){
		score++;
		}
	}



	// Output
	var results = document.getElementById('result');
	results.innerHTML = '<h3>You scored <span>' +score+ '</span> out of <span>' +total+ '</span></h3>'
	
	return false;
	
}