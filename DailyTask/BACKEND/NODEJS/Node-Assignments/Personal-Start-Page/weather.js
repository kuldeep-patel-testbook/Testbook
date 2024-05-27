// weather

function fetchWeatherData(location) {
    fetch(`https://wttr.in/${location}?format=j1`)
       .then((res) => res.json())
       .then((data) => {
          console.log(data);
          updateWeatherOnHTML(data)
       })
       .catch(err => console.warn("some err: ", err))
 }
 
 let place = localStorage.getItem("location") || 'Delhi'
 document.getElementById('location').innerHTML = `${place}`;
 document.getElementById("edit-location").addEventListener('click', (e) => {
    let address = prompt("Enter name of Disctrict or City", place)
    localStorage.setItem("location", address);
    document.getElementById('location').innerHTML = `${address}`;
    fetchWeatherData(address)
 })
 
 fetchWeatherData(place)
 function updateWeatherOnHTML(weatherData) {
    document.getElementById("temperature").innerHTML = `${weatherData.current_condition[0].temp_C}&deg;C`
    document.getElementById("description").innerHTML = `${weatherData.current_condition[0].weatherDesc[0].value}`
    document.getElementById("humidity").innerHTML = `${weatherData.current_condition[0].humidity}%`
    document.getElementById("pressure").innerHTML = `${weatherData.current_condition[0].pressure} mB`
    document.getElementById("windSpeed").innerHTML = `${weatherData.current_condition[0].windspeedKmph} km/h`
 }