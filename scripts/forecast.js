
searchEl=document.querySelector(".search");


//String(searchEl.value);

pictureEl = document.querySelector(".picture");

iconEl = document.querySelector(".icon");

detailsEl = document.querySelector(".details");

cityEl = document.querySelector(".city");

forecastEL = document.querySelector(".forecast");

tempEl = document.querySelector(".temp");

// EVent listener on the search

searchEl.addEventListener('input', function (e) {

e.preventDefault();

searchInput = String(searchEl.value);

getCityDetails (searchInput);

});


const getCityDetails = (searchInput)=>{

        fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=WeERAuEOIhhjZODtsMFPY5snLAJOk3Jz&q=${searchInput}`)    
        
        .then(response =>response.json())
        .then(response=>console.log(response[0].Key))
        .catch(err=>console.log(err))};

