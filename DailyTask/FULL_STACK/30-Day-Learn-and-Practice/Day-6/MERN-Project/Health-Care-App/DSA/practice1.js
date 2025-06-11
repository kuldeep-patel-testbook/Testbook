const countDown = (num) => {
    console.log(num);

    if(num <= 1) return;
    setTimeout(() => {
        countDown(num-1);
    }, 1000);
};

countDown(10);