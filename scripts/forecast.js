
searchEl=document.querySelector(".search");


//String(searchEl.value);

//pictureEl = document.querySelector(".picture");

iconEl = document.querySelector(".icon");

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
    iconEl.src=forecast.WeatherIcon;

}