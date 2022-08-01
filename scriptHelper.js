// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let target = document.getElementById('missionTarget');
    target.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
  `;
}

//Make sure javascript loads before the html (as soon as everything in this page loads, everything in function is executed)
    // window.addEventListener("load", function() {

function validateInput(testInput) {
    if(testInput === "") {
        return "Empty";
    }

    if(isNaN(testInput)) {
        return "Not a Number";
    } 

    if(!isNaN(testInput)) {
        return "Is a Number";
    }
}
    // When the submit button is hit, execute the code below    
    // let form = document.querySelector("form");
    // form.addEventListener("submit", function(event) {
function formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoMass) {
// DOM Elements    
    
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');

// Make sure the form elements have values
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert ("All fields are required!");
    }
    
// Make sure pilot name and co-pilot name inputs are strings
    if (validateInput(pilot) === "Is a Number"|| validateInput(copilot) === "Is a Number") {
    
        alert("Pilot & Co-pilot names need to be names, not a number.");
        
    }
// Making sure the fuel level and cargo mass input values are numbers
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number"){
        alert("Fuel level & cargo mass need to be integers!");
        
    }  else { // If fuel level & cargo mass are numbers, then check if...
            faultyItems.style.visibility = 'visible';
            pilotStatus.innerHTML = `Pilot ${pilot} is ready.`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;

        if(fuelLevel < 10000){ // The fuelLevel value less than 10,000?
            
            fuelStatus.innerHTML = `Fuel level too low for the journey!`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = 'red'
        }

        if(cargoMass > 10000){  // The cargoMass more than 10,000?
            
            cargoStatus.innerHTML = `Cargo mass too heavy for the shuttle to take off!`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = 'red';
        }

        else { // If the fuelLevel is equal to or above 10,000 AND cargoMass is equal to or below 10,000 then... 
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = 'green';
            fuelStatus.innerHTML = `Fuel level high enough for launch!`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch!`;
        }
    } 
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()* planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
