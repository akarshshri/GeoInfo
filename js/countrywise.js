var langArray = [];
var test;
query = localStorage.getItem("storageName");
const countryInfo = async () => {

    
    let api_url = 'https://restcountries.com/v3.1/name/'+ query;

    // Making an API call (request)
    // and getting the response back
    const response = await fetch(api_url);

    // Parsing it to JSON format
    const data = await response.json();
    var mapSrc = "https://maps.google.com/maps?q="+data[0].name.common+"&t=&z=4&ie=UTF8&iwloc=&output=embed";
    var temp = data[0].languages
    temp = Object.values(temp) //converting language obj to array

    //variables
    countryName = data[0].name.common;
    countryFlagLink = data[0].flags.png;
    countryCapital = data[0].capital;
    countryContinent = data[0].continents;
    countryPopulation = data[0].population;

    //innerHTML, src and HREF update
    document.getElementById('countryName').innerHTML += data[0].name.common;
    document.getElementById('mapHead').innerHTML += "Here is the map of "+data[0].name.common;
    document.getElementById("flag").src = countryFlagLink;
    document.getElementById("moreInfo").href = "https://www.infoplease.com/world/countries/" + countryName;
    document.getElementById("gmap_canvas").src = mapSrc;
    document.getElementById("img1").src = "https://source.unsplash.com/random/?"+countryName+",festival";
    document.getElementById("img2").src = "https://source.unsplash.com/random/?"+countryName+",beautiful";
    document.getElementById("img3").src = "https://source.unsplash.com/random/?"+countryName+",destination";
    

    //prinitng Languages
    temp.forEach(element => {
        document.getElementById('lang').innerHTML += "<li>"+element+"<br/>"
    });

    //printing Title and Desc
    document.getElementById("gmap_canvas").src = mapSrc;
    //conv2Array();   
    document.getElementById("desc").innerHTML = "It is a country in " + data[0].continents +" with a population of " + Intl.NumberFormat('en-IN').format(data[0].population) +". " + data[0].capital +" is the captial of " +data[0].name.common;
    window.Tether = {};

    //Weather API
    var key= 'ac6a2e55a2394eebb35202414221101' //Always  keep the API and other sensitive information in .env file.
    var api= 'https://api.weatherapi.com/v1/current.json?key='+key+'&q='+ countryName +'&aqi=no' 
    
    const weatherresponse = await fetch(api);
    var weatherData = await weatherresponse.json();
    weatherData = Object.values(weatherData)
    
    //Weather variables
    w_temp = weatherData[1].temp_c;
    w_feelsLike  = weatherData[1].feelslike_c;
    w_cloud  = weatherData[1].cloud;
    w_windSpeed = weatherData[1].wind_kph;
    w_humidity = weatherData[1].humidity;

    document.getElementById("weather").innerHTML = "Temperature (C): "+w_temp+  "<br>Feels Like:  "+w_feelsLike+ "<br>Wind Speed: "+w_windSpeed+"<br>Humidity: "+w_humidity+"<br>Cloud (%): "+w_cloud;
} 
countryInfo();
