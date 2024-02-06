// Categories objects store a categories wise questions, options and its correct answers
const categories = {
    // Add questions for the 'html and css' category
    htmlcss: [
        {
            question: "Fundamental HTML Block is known as",
            options: ["HTML Body", "HTML Tag", "HTML Attribute", "HTML Element"],
            correctAnswer: "HTML Tag"
        },
        {
            question: "Which of the following is not a browser?",
            options: ["Microsofts Bing", "Netscape Navigator", "Mozilla Firefox", "Opera"],
            correctAnswer: "Microsofts Bing"
        },
        {
            question: "HTML tags are surrounded by which type of brackets.",
            options: ["Curly", "Round", "Squart", "Angle"],
            correctAnswer: "Squart"
        },
        {
            question: "Which attribute is used to name an element uniquely?",
            options: ["id", "class", "dot", "name"],
            correctAnswer: "id"
        },
        {
            question: "When the form consists of sensitive information like passwords, which of the following methods should be used?",
            options: ["get", "post", "put", "set"],
            correctAnswer: "post"
        },
        {
            question: "Which of the following is not a part of the box model?",
            options: ["Padding", "Content", "Radius", "Margin"],
            correctAnswer: "Radius"
        },
        {
            question: "Which of the following CSS properties is used to position the HTML element?",
            options: ["position", "float", "clear", "display"],
            correctAnswer: "float"
        },
        {
            question: "Which of the following values can be applied to the CSS display property to display the list horizontally?",
            options: ["inherit", "inline", "block", "flex"],
            correctAnswer: "inline"
        },
        {
            question: "Which CSS property do you use to use flexbox?",
            options: ["position", "content", "box-sizing", "display"],
            correctAnswer: "display"
        },
        {
            question: "Which of the following is the two-dimensional layout that can work on rows and columns at a time?",
            options: ["Flex", "Box model", "Grid", "Margin"],
            correctAnswer: "Grid"
        },
    ],

    // Add questions for the 'Advanced Javascript' category
    javascript: [
        {
            question: "________ method is used to attach an event handler to a particular element.",
            options: ["addEvent()", "addListener()", "addEventListener()", "addListenerEvent()"],
            correctAnswer: "addEventListener()"
        },
        {
            question: "Which of the following methods returns all the elements that match the specified CSS selector?",
            options: ["getElementById()", "getElementsByTagName()", "getElementsByClassName()", "querrySelectorAll()"],
            correctAnswer: "querrySelectorAll()"
        },
        {
            question: "What will happen if we call setTimeout() with a time of 0 ms?",
            options: ["Placed in stack", "Placed in queue", "Will run continuously", "None of the above"],
            correctAnswer: "Placed in queue"
        },
        {
            question: "Which of the following functions are used in the case of asynchronous functions?",
            options: ["Callback hell", "Function sequence", "Callback", "Both a and c"],
            correctAnswer: "Callback"
        },
        {
            question: "The setTimeout() belongs to which of the following object?",
            options: ["Element", "Window", "Location", "None of the above"],
            correctAnswer: "Window"
        },
        {
            question: "Which of the following are closures in Javascript?",
            options: ["Variables", "Functions", "Objects", "All of the above"],
            correctAnswer: "All of the above"
        },
        {
            question: "What keyword is used to declare an asynchronous function in Javascript?",
            options: ["async", "await", "setTimeout", "None of the above"],
            correctAnswer: "async"
        },
        {
            question: "Which of the following are not server-side Javascript objects?",
            options: ["Date", "FileUpload", "Function", "All of the above"],
            correctAnswer: "All of the above"
        },
        {
            question: "Among the keywords below, which one is not a statement?",
            options: ["if", "with", "debugger", "use strict"],
            correctAnswer: "use strict"
        },
        {
            question: "The _______ method of an Array object adds and/or removes elements from an array.",
            options: ["Reverse", "Shift", "Slice", "Splice"],
            correctAnswer: "Splice"
        },

    ],

    // Add questions for the 'Advanced React' category
    reactjs: [
        {
            question: "Which of the following is used in React.js to increase performance?",
            options: ["Virtual DOM", "Original DOM", "Both A and B", "None of the above"],
            correctAnswer: "Virtual DOM"
        },
        {
            question: "Identify the one which is used to pass data to components from outside",
            options: ["Render with arguments", "setState", "PropTypes", "props"],
            correctAnswer: "props"
        },
        {
            question: "What is Babel?",
            options: ["JavaScript compiler", "JavaScript interpreter", "JavaScript transpiler", "None of the above"],
            correctAnswer: "JavaScript compiler"
        },
        {
            question: "Identify the command used to create a react app.",
            options: ["npm install create-react-app", "npm install -g create-react-app", "install -g create-react-app", "None of the above"],
            correctAnswer: "npm install -g create-react-app"
        },
        {
            question: "Which of the following port is the default where webpack-dev-server runs?",
            options: ["3000", "3306", "3030", "8080"],
            correctAnswer: "8080"
        },
        {
            question: "How many elements can a valid react component return?",
            options: ["1", "2", "3", "4"],
            correctAnswer: "1"
        },
        {
            question: "A state in React.js is also known as?",
            options: ["The internal storage of the component", "External storage of the component", "Permanent storage", "All of the above"],
            correctAnswer: "The internal storage of the component"
        },
        {
            question: "Which of the following method is used to access the state of a component from inside of a member function?",
            options: ["this.prototype.stateValue", "this,getState()", "this.values", "this.state"],
            correctAnswer: "this.values"
        },
        {
            question: "Among The following options, choose the one which helps react for keeping their data uni-directional?",
            options: ["DOM", "Flux", "JSX", "Props"],
            correctAnswer: "Flux"
        },
        {
            question: "Choose the method with refers to the parent class in ReactJS?",
            options: ["this()", "super()", "iniherits()", "self()"],
            correctAnswer: "super()"
        },

    ],
    // Add questions for the 'NodeJs' category
    nodejs: [
        {
            question: "Which of the following statements are true?",
            options: ["Node.js is a server-side language.", "Node.js is a client-side language.", "Node.js is both a server and client-side language.", "None of the above."],
            correctAnswer: "Node.js is a server-side language."
        },
        {
            question: "_____ is an interactive shell that processes Node.",
            options: ["REPL", "REAL", "RESP", "None of the above."],
            correctAnswer: "REPL"
        },
        {
            question: "What is the full form of REPL?",
            options: ["Read Eval Print Loop", "Research Eval Program Learn", "Read Earn Point Learn", "Read Eval Point Loop"],
            correctAnswer: "Read Eval Print Loop"
        },
        {
            question: "Node.js is written in which language?",
            options: ["C++", "Javascript", "C", "Java"],
            correctAnswer: "Javascript"
        },
        {
            question: "To include the HTTP server in the node module, what function do we use?",
            options: ["get()", "require()", "createServer()", "None of the above."],
            correctAnswer: "require()"
        },
        {
            question: "How can we install the node body-parser module?",
            options: ["npm install body-parser", "node install body-parser", "node.js install body-parser", "None of the above."],
            correctAnswer: "npm install body-parser"
        },
        {
            question: "Which of the following are examples of node modules?",
            options: ["Express", "Body-parser", "Socket.io", "All of the above"],
            correctAnswer: "All of the above"
        },
        {
            question: "How can we expose node modules?",
            options: ["exports", "expose", "requires", "None of the above"],
            correctAnswer: "exports"
        },
        {
            question: "What method is used to return the current working directory of the process?",
            options: ["cwd()", "pwd()", "cmd()", "None of the above."],
            correctAnswer: "cwd()"
        },
        {
            question: "Default scope in Node.js application is?",
            options: ["Global", "Local", "Local to Object", "None of the above."],
            correctAnswer: "Local"
        },
    ]
}
console.log(categories);

// declare a varibles
let currentCategory = "";
let currentQuestionIndex = 0;
let userAnswers = [];
let timer;
let timeSpent = 0;
let score = 0;
let maxTime = 300;

// Start quiz functions works
function startQuiz(category) {
    //alert("welcome to the quiz");
    category = sessionStorage.getItem('quizkey')
    currentCategory = category;
    console.log("Currentcategory => ", currentCategory);

    let currentCategoryText = "";
    const welcomeNote = document.createElement('h2');
    welcomeNote.id = 'welcome-note';
    welcomeNote.setAttribute('data-id', currentCategory);
    welcomeNote.innerText = "";

    if (currentCategory == 'htmlcss') {
        currentCategoryText = "HTML and CSS";
    } else if (currentCategory == 'javascript') {
        currentCategoryText = "Advanced Javascript";
    } else if (currentCategory == 'reactjs') {
        currentCategoryText = "Advanced ReactJs";
    } else if (currentCategory == 'nodejs') {
        currentCategoryText = "NodeJS";
    } else {
        currentCategoryText = "";
    }
    welcomeNote.innerText = currentCategoryText;

    const quizContainer = document.getElementById('container');
    quizContainer.insertBefore(welcomeNote, quizContainer.firstChild);

    currentQuestionIndex = 0;
    userAnswers = [];
    timeSpent = 0;
    score = 0;
    // updateTimer function call
    updateTimer();
    //load question function call
    loadQuestion();
    //update timer every seconds
    timer = setInterval(updateTimer, 1000);
}

// updateTimer on Interval on condition basis
function updateTimer() {
    const seconds = timeSpent % maxTime;
    const timerDisplay = document.getElementById('timer');

    if (timeSpent < maxTime) {
        timerDisplay.innerText = `${seconds}`
    } else {
        document.getElementById("next-btn").style.display = "none";
        timerDisplay.innerText = '00';
        timerDisplay.style.borderColor = "tomato";
        timerDisplay.style.color = "red";
        timerDisplay.style.fontWeight = "600";
        document.getElementById("timesUp").style.display = "block";
        document.getElementById("show-result").style.display = "block";
        clearInterval(timer); // Stop the timer
    }
    timeSpent++;
}

// load the questions on questions containers
function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    console.log("loadQuestion=>", categories[currentCategory][currentQuestionIndex]);
    const questionObject = categories[currentCategory][currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
    <div id='question-header'>
        <div class='question-count'>
            <div>${currentQuestionIndex + 1}/ ${categories[currentCategory].length}</div>
            <p>${questionObject.question}</p>
        </div>
    </div>
    <ul id="options-container">
        ${questionObject.options.map((option, index) =>
        `<li class="option" id="index_${index}" onclick="selectOption('${option}')">${option}</li>`).join('')}
    </ul>
    `;
    questionContainer.appendChild(questionElement);

    console.log("questionObject", questionObject.question);
    console.log("increase", currentQuestionIndex + 1);
    console.log("increase categ", categories[currentCategory].length);

    if (currentQuestionIndex < categories[currentCategory].length - 1) {
        document.getElementById("next-btn").style.display = "block";
    } else {
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("show-result").style.display = "block";
    }
}

// next button click then switch to the next questions.
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// selection options functions works increment a correct answer wise score and push userAnsers array value.
function selectOption(selectedOption) {
    userAnswers.push({ question: categories[currentCategory][currentQuestionIndex].question, answer: selectedOption });

    if (selectedOption === categories[currentCategory][currentQuestionIndex].correctAnswer && timeSpent < maxTime) {
        score++;
        document.getElementById("score").innerHTML = `Score: <span>${score}</span>`;
    }

    if (currentQuestionIndex < categories[currentCategory].length - 1 && timeSpent < maxTime) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        clearInterval(timer); // Stop the timer when all questions are answered
        if (timeSpent < maxTime) {
            document.getElementById("result-page").style.display = "block";
        }
    }
}

function quizResults() {
    //alert("quiz result page");
    clearInterval(timer); // all questions are answered then stop the timer.

    //set correctAnswersLength value
    const correctAnswersLength = userAnswers.filter(answer => {
        console.log("answer=>", answer);
        const findCorrectAnswers = categories[currentCategory].find(question => question.question === answer.question).correctAnswer;
        console.log("findCorrectAnswers=>", findCorrectAnswers);
        return answer.answer === findCorrectAnswers;
    }).length;

    //calculate total time taken logic
    const totalTimeElement = `${timeSpent}`;
    //calculate logic and display total questions, total attempt questions, correct questions and wrong questions
    const totalQuestions = `${categories[currentCategory].length}`;
    const totalAttempt = `${userAnswers.length}`;
    const wrongAnswers = totalAttempt - correctAnswersLength;

    //calculate logic and display percentage score
    const percentageScore = (correctAnswersLength / totalQuestions) * 100;
    const percentageScoreFixed = `${percentageScore.toFixed(2)}`;

    sessionStorage.setItem('totalTimeElement', totalTimeElement);
    sessionStorage.setItem('totalQuestions', totalQuestions);
    sessionStorage.setItem('totalAttempt', totalAttempt);
    sessionStorage.setItem('correctAnswersLength', correctAnswersLength);
    sessionStorage.setItem('wrongAnswers', wrongAnswers);
    sessionStorage.setItem('percentageScore', percentageScoreFixed);

    window.location.href = "result.html";
}