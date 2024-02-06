
//check username value function
function checkUserName() {
    const username = document.getElementById('username').value;
    username.trim();
    sessionStorage.setItem('username', username);
    return username;
}

// Enter Button click move to categoryBtn function then check username and move to if condition.
function categoryBtn1() {
    //check username its empty its showing alertbox and move to if condition.
    if (checkUserName() === '') {
        alert("Please enter a username.");
        document.getElementById('username').focus();
    } else {
        //Redirect to the quiz page then startQuiz function works
        sessionStorage.setItem('quizkey', 'htmlcss'); 
        window.location.href = "quiz.html"; //startQuiz('htmlcss'); default categories question display
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
        sessionStorage.setItem('quizkey', 'javascript');
        window.location.href = "quiz.html";
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
        sessionStorage.setItem('quizkey', 'reactjs');
        window.location.href = "quiz.html";
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
        sessionStorage.setItem('quizkey', 'nodejs');
        window.location.href = "quiz.html";

    }
}