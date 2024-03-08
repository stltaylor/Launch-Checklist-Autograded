// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse = myFetch().then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
    let planet = pickPlanet(listedPlanets);
    addDestinationInfo(document,planet.name,planet.diameter,planet.star,planet.distance,planet.moons,planet.image)
    
    })

    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    formSubmission(document, 
      document.getElementById("faultyItems"), 
      document.getElementById("pilotName").value, 
      document.getElementById("copilotName").value,
      document.getElementById("fuelLevel").value,
      document.getElementById("cargoMass").value
    )
    })
})