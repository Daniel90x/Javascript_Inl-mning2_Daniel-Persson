// Search funktion



/*
let search_input = document.getElementById("search-bar");

search_input.addEventListener("keyup", function(e)){
    console.log(e.target.value);


}

*/

/*
function executeSearch(){
    let input = document.getElementById("search-bar");







} */


/*

let searchBar = document.querySelector("#search");
    searchBar.onsubmit = function(e){
        alert(e.currentTarget.value);

        // Låtsas som att eventet aldrig skedde 
        e.preventDefault();
    }

*/





let searchBar = document.querySelector("#searchBar");
searchBar.onchange = function(e){
    alert(searchBar.value);




} 


/*   
let form = document.querySelector("#search");
    form.onsubmit = function(e){
        alert(form.search.value);

        // Låtsas som att eventet aldrig skedde 
        // Form vill kontakta en server via html
        // men vi vill göra det via javascript
        //så vi använder detta för att säga till
        // form elementet att submiten inte gäller
        e.preventDefault();
    }
*/
















// Behöver en reset funktion?

