console.log("ITS GON RAIN!")

var cityNameInput = document.querySelector('#input-box')
var searchBtn = document.getElementById('search-btn')


function getLongLat() {

    var getCity = cityNameInput.value
    var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + getCity + "&limit=1&appid=8ae331534e5d504cddf6268ac4ef3357" 

    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    return;
}


searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    getLongLat();
})
// getLongLat();