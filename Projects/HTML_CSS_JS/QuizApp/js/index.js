//check username value function
function checkUserName() {
    const username = document.getElementById('username').value;
    return username.trim();
}

// Enter Button click move to categoryBtn function then check username and move to if condition.
function categoryBtn1() {
    //check username its empty its showing alertbox and move to if condition.
    if (checkUserName() === '') {
        alert("Please enter a username.");
        document.getElementById('username').focus();
    } else {
        //Redirect to the quiz page then startQuiz function works 
        window.location.href = "quiz.html?quizkey=htmlcss&username=" + checkUserName(); //startQuiz('htmlcss'); default categories question display
    }
}

// Enter categoryBtn2 function click then check username and move to if condition.
function categoryBtn2() {
    //check username its empty its showing alertbox and move to if condition.
    if (checkUserName() === '') {
        alert("Please enter a username.");
        document.getElementById('username').focus();
    } else {
        //Redirect to the quiz page then startQuiz function works 
        window.location.href = "quiz.html?quizkey=javascript&username=" + checkUserName();
    }
}

// Enter categoryBtn3 function click then check username and move to if condition.
function categoryBtn3() {
    //check username its empty its showing alertbox and move to if condition.
    if (checkUserName() === '') {
        alert("Please enter a username.");
        document.getElementById('username').focus();
    } else {
        //Redirect to the quiz page then startQuiz function works 
        window.location.href = "quiz.html?quizkey=reactjs&username=" + checkUserName();
    }
}

// Enter categoryBtn4 function click then check username and move to if condition.
function categoryBtn4() {
    //check username its empty its showing alertbox and move to if condition.
    if (checkUserName() === '') {
        alert("Please enter a username.");
        document.getElementById('username').focus();
    } else {
        //Redirect to the quiz page then startQuiz function works 
        window.location.href = "quiz.html?quizkey=nodejs&username=" + checkUserName();

    }
}
