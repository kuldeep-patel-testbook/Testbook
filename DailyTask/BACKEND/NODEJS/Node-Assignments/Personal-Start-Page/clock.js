// Clock JS
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 13;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
    let day = `${days[now.getDay() - 1]}, ${months[now.getMonth()]} ${now.getDate()}`
    var time = `${hours}:${minutes}:${seconds} ${amPm}`
    
    document.getElementById('clockTime').innerHTML = time;
    document.getElementById('clockDay').innerHTML = day;
    setTimeout(updateClock, 1000);
 }
 updateClock();

// setting the background image
const url = `https://source.unsplash.com/random/widthxheight` || `https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80`;
const body = document.getElementsByTagName('body')[0];
const getImage = async (url) => {
    return await fetch(url).then(res => res.url);
}
const img_url = getImage;
getImage(url).then(result => {
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${result})`;
});
//https://source.unsplash.com/collection/158642/${window.screen.width - 1}x${window.screen.height - 1}