let timeFormat = function(timestamp) {
    let javaStamp = timestamp * 1000;
    const date = new Date(javaStamp);
    const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate.toString();
}

console.log("ITS GON RAIN!")

var cityNameInput = document.querySelector('#input-box');
var searchBtn = document.getElementById('search-btn');
// var cardsBox = document.getElementById('cards-box');


function getLongLat() {
    var cardsBox = document.getElementById('cards-box')
    
    

    var getCity = cityNameInput.value
    var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + getCity + "&limit=1&appid=8ae331534e5d504cddf6268ac4ef3357" 
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        const lonData = data[0].lon;
        const latData = data[0].lat;

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latData}&lon=${lonData}&units=imperial&appid=8ae331534e5d504cddf6268ac4ef3357`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var cardEl = document.createElement('h2');
            cardEl.setAttribute("class", "card p-3 mb-2 bg-dark text-info font-weight-bold");
            cardEl.setAttribute("style", "width: 20rem");
            // cardEl.textContent = "Today's weather:";

            var dateBox = document.createElement('p');
            dateBox.textContent = data.city.name + " " + timeFormat(data.list[0].dt);
            cardEl.appendChild(dateBox);

            var tempBox = document.createElement('p');
            tempBox.textContent = "Temp: " + data.list[0].main.temp + "°F";
            cardEl.appendChild(tempBox);

            var humidBox = document.createElement('p');
            humidBox.textContent = "Humidity: " + data.list[0].main.humidity + "%";
            cardEl.appendChild(humidBox);

            var windBox = document.createElement('p');
            windBox.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
            cardEl.appendChild(windBox);

            cardsBox.appendChild(cardEl);
        })
    })
    

}


searchBtn.addEventListener("click", function (event) {
    var oldCard = document.querySelector('.card');
    if(oldCard) {
        oldCard.remove();
    }
    event.preventDefault();
    
    getLongLat();
})
// getLongLat();