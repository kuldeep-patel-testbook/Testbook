const questions = [
    {
        question: "What is your favorite color?",
        options: ["Red", "Blue", "Green"]
    },
    {
        question: "What is your favorite animal?",
        options: ["Dog", "Cat", "Bird"]
    },
    {
        question: "What is your favorite season?",
        options: ["Spring", "Summer", "Winter", "Fall"]
    },
    {
        question: "What is your preferred mode of transport?",
        options: ["Car", "Bicycle", "Public Transport"]
    },
    {
        question: "Which genre of music do you prefer?",
        options: ["Rock", "Pop", "Classical", "Jazz"]
    }
];

const questionsDiv = document.getElementById('questions');

questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionLabel = document.createElement('label');
    questionLabel.textContent = q.question;
    questionDiv.appendChild(questionLabel);

    q.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');

        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `question${index}`;
        optionInput.value = option;
        optionDiv.appendChild(optionInput);

        const optionLabel = document.createElement('label');
        optionLabel.textContent = option;
        optionDiv.appendChild(optionLabel);

        questionDiv.appendChild(optionDiv);
    });

    questionsDiv.appendChild(questionDiv);
});
