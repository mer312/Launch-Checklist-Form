window.addEventListener('load', function() {

   let form = document.getElementById("launchForm");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {

      const div = document.getElementById("missionTarget"); 
      let i =Math.floor(Math.random()*6);    
      div.innerHTML = `
      <ol>
         <li>Name: ${json[i].name}</li>
         <li>Diameter: ${json[i].diameter}</li>
         <li>Star: ${json[i].star}</li>
         <li>Distance from Earth: ${json[i].distance}</li>
         <li>Number of Moons: ${json[i].moons}</li>
      </ol>
         <img src="${json[i].image}">
            `;  
      })
   });
      form.addEventListener("submit", function(event){
         event.preventDefault();
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         let launchStatus = document.getElementById("launchStatus");
         let faultyItems = document.getElementById("faultyItems");
         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus"); 
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value ==="" || cargoMass.value === "") {
            alert("All Fields are Required")
            
         } else if (isNaN(pilotName.value)===false || isNaN(copilotName.value)===false || isNaN(Number(fuelLevel.value))===true || isNaN(Number(cargoMass.value))===true) {
            alert("Make sure to enter valid information for each field!")
            
         } else if ((Number(fuelLevel.value) >= 10000) && (Number(cargoMass.value) <= 10000)){
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            faultyItems.style.visibility = "hidden";
            launchStatus.style.color = "green";
            
         } else if ((Number(fuelLevel.value) >= 10000) && (Number(cargoMass.value) > 10000)){
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle NOT Ready For Launch";
            launchStatus.style.color = "red" ;
            pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready for launch.`);
            copilotStatus.innerHTML = (`CoPilot ${copilotName.value} is ready ready for launch.`);
            fuelStatus.innerHTML = (`Fuel Status ${fuelLevel.value} is high enough for launch`);
            cargoStatus.innerHTML = (`Cargo Mass ${ cargoMass.value} is too high for launch`);
            
         } else if ((Number(fuelLevel.value) < 10000) && (Number(cargoMass.value)<= 10000)){
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle NOT Ready For Launch";
            launchStatus.style.color = "red" ;
            pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready for launch.`);
            copilotStatus.innerHTML = (`CoPilot ${copilotName.value} is ready ready for launch.`);
            fuelStatus.innerHTML = (`Fuel Status ${fuelLevel.value} is too low for launch`);
            cargoStatus.innerHTML = (`Cargo Mass ${ cargoMass.value} is low enough for launch`);

         }  else if ((Number(fuelLevel.value) < 10000) && (Number(cargoMass.value)> 10000)){
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle NOT Ready For Launch";
            launchStatus.style.color = "red" ;
            pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready for launch.`);
            copilotStatus.innerHTML = (`CoPilot ${copilotName.value} is ready ready for launch.`);
            fuelStatus.innerHTML = (`Fuel Status ${fuelLevel.value} is too low for launch`);
            cargoStatus.innerHTML = (`Cargo Mass ${ cargoMass.value} is to high for launch`); 
         }         
   })
})