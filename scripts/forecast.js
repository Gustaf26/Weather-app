
searchEl=document.querySelector(".search");


//String(searchEl.value);

pictureEl = document.querySelector(".picture");

iconEl = document.querySelector(".icono");

detailsEl = document.querySelector(".details");

cityEl = document.querySelector(".city");

forecastEl = document.querySelector(".forecast");

tempEl = document.querySelector(".temp");


// EVent listener on the search

searchEl.addEventListener('input', function (e) {

e.preventDefault();

searchInput = String(searchEl.value);

getCityDetails (searchInput);



});

//Get city ID

const getCityDetails = (searchInput)=>{

    cityEl.innerText=searchInput;
    updateStorage(searchInput);

        fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=WeERAuEOIhhjZODtsMFPY5snLAJOk3Jz&q=${searchInput}`)    
        
        .then(response =>response.json())
        .then(response=>getForecast(response[0].Key))
        .catch(err=>console.log(err))};

//Search weather details

const getForecast = (city) => {

   // searchInput="";
   // searchEl.value="";

    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${city}?apikey=WeERAuEOIhhjZODtsMFPY5snLAJOk3Jz`)    
        
        .then(response =>response.json())
        .then(response=>outputWeather(response[0]))
        .catch(err=>console.log(err))};


const outputWeather = (forecast) => {

    forecastEl.innerHTML = forecast.WeatherText;
    tempEl.innerText= forecast.Temperature.Metric.Value;

    if (forecast.IsDayTime) {pictureEl.src="images/cloudy.png";}

    else {pictureEl.src="images/night.png"};

    if (forecast.WeatherText=="Mostly clear") {
    iconEl.src=`images/partly-cloudy.png`;
    }

    else if (forecast.WeatherText=="Sunny") {
        iconEl.src=`images/sunny.png`;
        }
    
    else if (forecast.WeatherText=="Rainy") {
        iconEl.src=`images/rainy.png`;
        }
    else if (forecast.WeatherText=="Cloudy") {
            iconEl.src=`images/cloudy.png`;
            }
    
}

const updateStorage = (city) => {

    localStorage.clear();

    localStorage.setItem('city', city);
}

const getFromStorage = () => {

    const city = localStorage.getItem('city');

    getCityDetails(city);

}

getFromStorage();