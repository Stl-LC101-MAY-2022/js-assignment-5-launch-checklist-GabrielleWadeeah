// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
   });

   let faultyItems = document.getElementById('faultyItems');

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotNameInput.value;
    let copilotNameInput = document.querySelector("input[name=copilotName]")
    let copilot = copilotNameInput.value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelLevelInput.value);
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let cargoMass = Number(cargoMassInput.value);

    formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
   });
});


