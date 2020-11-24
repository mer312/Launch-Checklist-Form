window.addEventListener('load', function() {

   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let form1 = document.getElementById("launchForm");

   form1.addEventListener("submit", function(event){
   if(pilotName !== "Chris"){
   event.preventDefault();

}
   if(copilotName !== "Blake"){
   event.preventDefault();
}
   if(!fuelLevel){
   event.preventDefault();
}
   if(!cargoMass){
   event.preventDefault();
}

   })

   <h2>Mission Destination</h2>

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
         div.innerHTML = `
   <ol>
      <li>Name: ${json.name}</li>
      <li>Diameter: ${json.diameter}</li>
      <li>Star: ${json.star}</li>
      <li>Distance from Earth: ${json.distance}</li>
      <li>Number of Moons: ${json.moons}</li>
   </ol>
<img src="${json.image}">
            `;
         });
      });
   })

// // This block of code shows how to format the HTML once you fetch some plan
