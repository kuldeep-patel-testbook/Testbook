// Display a result page all the related logic, total questions, attempt, wrong answer, corect answer and start agin button using createElement 
function showResults() {
    // alert("showing show results");
    const searchParams = new URLSearchParams(window.location.search);
    const searchParamsuserName = searchParams.get('username'); // get username
    const searchParamstotalTimeElement = searchParams.get('totalTimeElement'); // get Total Time Taken
    const searchParamstotalQuestions = searchParams.get('totalQuestions'); // get totalQuestions
    const searchParamstotalAttempt = searchParams.get('totalAttempt'); // get totalAttempt
    const searchParamscorrectAnswersLength = searchParams.get('correctAnswersLength'); // get correctAnswersLength
    const searchParamswrongAnswers = searchParams.get('wrongAnswers'); // get wrongAnswers
    const searchParamspercentageScore = searchParams.get('percentageScore'); // get percentageScore

    document.getElementById('uname').innerHTML = `<b>${searchParamsuserName.trim()}</b> your result is:`;
    document.getElementById('totalTimeTaken').innerHTML = `Total Time Taken: <b>${searchParamstotalTimeElement}</b> seconds`;
    document.getElementById('displayElements').innerHTML = `Total Questions: <b>${searchParamstotalQuestions}</b><br>
    Attempts: <b>${searchParamstotalAttempt}</b><br>
    Correct: <b>${searchParamscorrectAnswersLength}</b><br>
    Wrong: <b>${searchParamswrongAnswers}</b>`;
    document.getElementById('scoreElement').innerHTML = `Percentage: <b>${searchParamspercentageScore}%</b>`;
}

//Start the quiz again.
function startAgain() {
    const searchParams = new URLSearchParams(window.location.search);
    const searchParamsQuizKey = searchParams.get('quizkey'); // get quizkey
    const searchParamsuserName = searchParams.get('username'); // get username
    window.location.href = `quiz.html?quizkey=${searchParamsQuizKey}&username=${searchParamsuserName}`;
}

// Redirect to the home page.
function goToHome() {
    window.location.href = "index.html";
}