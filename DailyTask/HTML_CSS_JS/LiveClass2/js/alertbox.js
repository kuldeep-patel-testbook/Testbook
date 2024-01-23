// alert("Hello Student!");
// // window.alert("Hello Window Student!");
// confirm("Are you sure want to exit?");
// window.confirm("Are you sure want to exit one?");
// prompt("Enter a Name and proceed!");

let dayNumber = 2;

switch(dayNumber) {
    case 0:
        day ="Sunday";
    case 1:
        day ="Monday";
    case 2:
        day ="Tuesday";
    case 3:
        day ="Wednesday";
    case 4:
        day ="Thursday";        
}

document.getElementById('switchdayDemo').innerHTML = day;
