// Search funktion
const searchButton = document.getElementById("searchButton");
const cityName = document.getElementById("searchBar"); 

searchButton.addEventListner("click", function(){
  
  //Kalla på en clear metod WiP
  // if (cityName != ""){


  
  if (document.getElementById(("checkWeather").checked === true)) {
    
    getAPI(getCityWeatherUrl(cityName)){ // WiP
      buildweatherSection();


    }

  }
  if (document.getElementById(("checkAttractions").checked == true)){
      getAPI(getfoursquareUrl(cityName)){ //WiP
        buildattractionSection();
    }

  }


}




//Skapar API-URL här under.....

//Openweather
 function getCityWeatherUrl(cityName) {
   const weatherUrl = new URL("https://api.openweathermap.org/data/2.5/weather");

   weatherUrl.searchParams.append("appid", "fb36e2cb21b7fb1bf87a133b90cdfa79"); // Min API, finns i min e-mail om du råkar förstöra den...
   weatherUrl.searchParams.append("mode", "json"); // format
   weatherUrl.searchParams.append("units", "metric"); // längd mått
   weatherUrl.searchParams.append("lang", "se"); // språk
   weatherUrl.searchParams.append("q", cityName); // searchBar input, 


   return weatherUrl;
 }

 // Foursquare
 function getfoursquareUrl(cityName) {
  const foursquareUrl = new URL("https://api.foursquare.com/v2/venues/explore");


  foursquareUrl.searchParams.append("near", cityName); // searchBar input, 
  foursquareUrl.searchParams.append("client_id", "C5P3TV543C2BXXP41JXK4GVWGB0LK0QEUOMXJZKGGECX3P3W");         // Mitt client id hos foursquare hos foursquare: C5P3TV543C2BXXP41JXK4GVWGB0LK0QEUOMXJZKGGECX3P3W 
  foursquareUrl.searchParams.append("client_secret", "CIGHY0TOGDBGFYOMV5DGZ3J13R0YZHUM4FBIJISJ2B0TZOEZ"); // Mitt client secret hos foursquare: CIGHY0TOGDBGFYOMV5DGZ3J13R0YZHUM4FBIJISJ2B0TZOEZ
  


  return foursquareUrl;
}

// Hämtar APIer
function getApi(){ // Url rätt?
  try {
    let answer = await fetch();

    if(answer = true) {
      let answerinJson = await answer.json();

      return answerinJson;

    }
    else {
      alert("Couldn't find the URL...");

    }
  } catch (error) {
    console.log("Error doesn't work...");
}
}


// BYGG DELAR HÄR NERE
function buildweatherSection(){
  let section = document.getElementById("weatherSection") 
  let weatherDescription = document.createElement("h2") // SKapa element
  let weatherTemp = document.createElement("p")

  section.append(weatherDescription) // Lägg till element på sin plats
  section.append(weatherTemp)



}

function buildattractionSection(){
  let section = document.getElementById("attractionSection")
  let attractionDescription = document.createElement("h3") // SKapa element

  section.append(attractionDescription) // Lägg till element på sin plats


}





// Behöver en reset funktion?

/*
function resetEverything(){
  WiP


}



*/


/* HJÄLP TILL SENARE


/*

let searchBar = document.querySelector("#searchBar");
searchBar.onchange = function(e){
    alert(searchBar.value);




} 




*/)