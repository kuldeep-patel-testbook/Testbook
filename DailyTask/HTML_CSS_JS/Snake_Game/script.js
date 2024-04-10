document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const startbtn = document.querySelector('.start')
    const scoreDisplay = document.querySelector('.score span');

    const width = 10;
    let currentSnake = [2, 1, 0];
    let currentIndex = 0;
    let appleindex = 0;
    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0;
    
    let startGame = function() {
        console.log("Game Started");
        currentSnake.forEach(index => squares[index].classList.remove('snake'));
        squares[appleindex].classList.remove('apple');
        clearInterval(interval);
        score = 0;
        randomApple();
        direction = 1;
        scoreDisplay.innerText = score;
        intervalTime = 1000;
        console.log(squares);
        currentSnake = [2, 1, 0];
        currentIndex = 0;
        currentSnake.forEach(index => squares[index].classList.add('snake'));
        console.log('curret Snale is at ', currentSnake);
        interval = setInterval(moves, intervalTime);
        console.log("currentSnake[0]", currentSnake[0]);
    }

    let randomApple = function() {
        do {
            appleindex = Math.floor(Math.random() * squares.length);
            console.log(appleindex);
        } while (squares[appleindex].classList.contains('snake')) {
            squares[appleindex].classList.add('apple');
        }
    }

    let moves = function() {

        if(
            (currentSnake[0] + width >= (width * width) && direction === width) ||
            (currentSnake[0] - width < 0 && direction === -width) ||
            (currentSnake[0] % width === 0 && direction === -1) ||
            (currentSnake[0] % width === (width -1) && direction === 1) ||
            squares[currentSnake[0] + direction].classList.contains('snake')
        ) {
            alert('Game Over!');
            console.log('Current Snake Value is', currentSnake[0]);
            return clearInterval(interval);
        }

        const tail = currentSnake.pop();
        console.log("tail", tail);
        squares[tail].classList.remove('snake');
        currentSnake.unshift(currentSnake[0] + direction);

        if(squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple');
            squares[tail].classList.add('snake');
            currentSnake.push(tail);
            score++;
            console.log("score display=>", score);
            scoreDisplay.textContent = score;
            randomApple();
            clearInterval(interval);
            intervalTime = intervalTime * speed;
            interval = setInterval(moves, intervalTime);
        }
        squares[currentSnake[0]].classList.add('snake');
    }

    let funcControl = function(e) {

        if(e.keyCode === 39) {
            direction = 1;
            console.log("direction => RIGHT");
        } else if(e.keyCode === 37) {
            direction = -1;
            console.log("direction => LEFT");
        } else if(e.keyCode === 38) {
            direction = -width;
            console.log("direction => UP");
        } else if(e.keyCode === 40) {
            direction = +width;
            console.log("direction => DOWN");
        }
    }
    
    document.addEventListener('keyup', funcControl);
    startbtn.addEventListener('click', startGame);
});