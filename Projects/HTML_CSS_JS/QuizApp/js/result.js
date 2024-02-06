// Display a result page all the related logic, total questions, attempt, wrong answer, corect answer and start agin button using createElement 
function showResults() {
    
    // alert("showing show results");
    // const searchParamsuserName = searchParams.get('username'); // get username
    
    const searchParamsuserName = sessionStorage.getItem('username'); // get username

    const searchParamstotalTimeElement = sessionStorage.getItem('totalTimeElement'); // get Total Time Taken
    const searchParamstotalQuestions = sessionStorage.getItem('totalQuestions'); // get totalQuestions
    const searchParamstotalAttempt = sessionStorage.getItem('totalAttempt'); // get totalAttempt
    const searchParamscorrectAnswersLength = sessionStorage.getItem('correctAnswersLength'); // get correctAnswersLength
    const searchParamswrongAnswers = sessionStorage.getItem('wrongAnswers'); // get wrongAnswers
    const searchParamspercentageScore = sessionStorage.getItem('percentageScore'); // get percentageScore

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
    window.location.href = `quiz.html`;
}

// Redirect to the home page.
function goToHome() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('quizkey');
    sessionStorage.removeItem('totalTimeElement');
    sessionStorage.removeItem('totalQuestions');
    sessionStorage.removeItem('totalAttempt');
    sessionStorage.removeItem('correctAnswersLength');
    sessionStorage.removeItem('wrongAnswers');
    sessionStorage.removeItem('percentageScore');

    window.location.href = "index.html";
}