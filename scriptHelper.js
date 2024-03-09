// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
 
   let missionTarget = document.getElementById('missionTarget')
   missionTarget.innerHTML = ` <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
 }
 
 function validateInput(testInput) {
       if (testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return "Not a Number"; 
    } else  {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let launchReady = true;
    let pilotStat = document.getElementById('pilotStatus');
    let coplitStat = document.getElementById('copilotStatus');
    let fuelStat = document.getElementById('fuelStatus');
    let cargoStat = document.getElementById('cargoStatus');
    let launchStat = document.getElementById('launchStatus');

    list.style.visibility = 'visible';


    // Validate Empty
    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        window.alert('All fields are required!');
    }
    // Validate correct data
    if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        window.alert('Make sure to enter valid information for each field!');
    }
    // Pilot & Copilot names
    pilotStat.innerHTML = `Pilot ${pilot} is ready for launch`;
    coplitStat.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    // Fuel Level check
    if (fuelLevel < 10000) {
        fuelStat.innerHTML = 'Fuel level too low for launch';
        launchReady = false;
    } else {
        fuelStat.innerHTML = 'Fuel level high enough for launch';
    }
    // Cargo Mass check
    if (cargoLevel > 10000) {
        cargoStat.innerHTML = 'Cargo mass too heavy for launch';
        launchReady = false;
    } else {
        cargoStat.innerHTML = 'Cargo mass low enough for launch';
    }
    // Launch Status
    if (launchReady === false) {
        launchStat.innerHTML = 'Shuttle Not Ready for Launch';
        launchStat.style.color = 'red';
    } else {
        launchStat.innerHTML = 'Shuttle is Ready for Launch';
        launchStat.style.color = 'green';
    }
 }
 
 async function myFetch() {
     let planetsReturned;

     let url = "https://handlers.education.launchcode.org/static/planets.json";

     planetsReturned = await fetch(url).then(function(response) {
        return response.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    
    // random number multiplied by the length of the array of planets to use for index
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;