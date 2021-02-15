// Search funktion

let searchBar = document.querySelector("#searchBar");
searchBar.onchange = function(e){
    alert(searchBar.value);




} 

 /*  pseudo-kod för inlämningsuppgift 2 */
    
    searchButton.onclick = function(){
      const cityName = document.getElementById("searchBar").value;
      const weatherUrl = getCityWeatherUrl(cityName);
      
      const info = getWeatherInfoObject(weatherUrl);
      
      document.querySelector(".title").innerText = info.weather[0].main;
    }
  
//Skapar APIER här under.....

 function getCityWeatherUrl(cityName) {
   const weatherUrl = new URL("https://api.openweathermap.org/data/2.5/weather");

   weatherUrl.searchParams.append("appid", "fb36e2cb21b7fb1bf87a133b90cdfa79"); // Min API, finns i min e-mail om du råkar förstöra den...
   weatherUrl.searchParams.append("mode", "json"); // format
   weatherUrl.searchParams.append("units", "metric"); // längd mått
   weatherUrl.searchParams.append("lang", "se"); // språk
   weatherUrl.searchParams.append("q", cityName); // searchBar input, 


   return weatherUrl;
 }

 function foursquareUrl(cityName) {
  const foursquarerUrl = new URL("https://api.foursquare.com/v2/venues/explore");


  foursquarerUrl.searchParams.append("near", cityName); // searchBar input, 
  foursquarerUrl.searchParams.append("client_id", "C5P3TV543C2BXXP41JXK4GVWGB0LK0QEUOMXJZKGGECX3P3W");         // Mitt client id hos foursquare hos foursquare: C5P3TV543C2BXXP41JXK4GVWGB0LK0QEUOMXJZKGGECX3P3W 
  foursquarerUrl.searchParams.append("client_secret", "CIGHY0TOGDBGFYOMV5DGZ3J13R0YZHUM4FBIJISJ2B0TZOEZ"); // Mitt client secret hos foursquare: CIGHY0TOGDBGFYOMV5DGZ3J13R0YZHUM4FBIJISJ2B0TZOEZ
  


  return foursquarerUrl;
}


/*

   /* 
   FRÅN [Fråga 2]
  */
 /*

 function getCityWeatherInfo(cityName, useObject) {
  const url = getCityWeatherUrl(cityName);

  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.responsType = "json";

  xhr.onload = function () {
    console.log(xhr.status + " " + xhr.statusText);
    console.log(xhr.response);

    let obj = JSON.parse(xhr.response);

    let essentials = {
      city: obj.name,
      time: obj.dt,
      weather: obj.weather[0].main,
    };

    useObject(essentials);
  };

  xhr.send();
}

outputElement = document.querySelector("#q2_out");

getCityWeatherInfo("Göteborg", function (info) {
  // instruktioner för när jag har fått informationen
  outputElement.innerText = info.city;
}); 

*/








// Behöver en reset funktion?

/* HJÄLP TILL SENARE

fråga 1

// let searchbarOutput = document.querySelector("#searchBar");

 function getCityWeatherUrl(cityName) {
   const url = new URL("https://api.openweathermap.org/data/2.5/weather");

   url.searchParams.append("appid", "fb36e2cb21b7fb1bf87a133b90cdfa79"); // Min API, finns i e-mail om du råkar förstöra den...
   url.searchParams.append("mode", "json");
   url.searchParams.append("units", "metric");
   url.searchParams.append("lang", "se");
   url.searchParams.append("q", cityName); // q?
  

   searchbarOutput.innerText = url;

   return url;
 }

 const url = getCityWeatherUrl("Halmstad");
 window.url = url;                          // window.url är?



























*/