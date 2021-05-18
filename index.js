// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "Ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount*averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTemp = -225;
let fuelLevel = "100%";
let weatherStatus = "Clear";
let spacer = "-------------------------------";

// Write code to generate the LC04 report here:

console.log(spacer+"\n"+"> LC04 - LAUNCH CHECKLIST"+"\n"+spacer);
console.log("Date: "+date);
console.log("Time: "+time+"\n"+"\n");

console.log(spacer+"\n"+"> Astronaut Info"+"\n"+spacer);
console.log("* count: "+astronautCount);
console.log("* status: "+astronautStatus);
console.log("\n" + "\n");

console.log(spacer+"\n"+"> FUEL DATA" + "\n"+spacer);
console.log("* Fuel temp celsius: " + fuelTemp + " C");
console.log("* Fuel level: " + fuelLevel + "%");
console.log("\n" + "\n");

console.log(spacer+"\n"+"> MASS DATA" + "\n"+spacer);
console.log("* Crew mass: " + crewMassKg + "kg");
console.log("* Fuel mass: " + fuelMassKg + "kg");
console.log("* Shuttle mass: " + shuttleMassKg + "kg");
console.log("* Total Mass: " + totalMassKg + "kg");
console.log("\n" + "\n");

console.log(spacer+"\n"+"> FLIGHT PLAN" + "\n"+spacer);
console.log("*Weather: " +weatherStatus)
console.log("\n" + "\n");

console.log(spacer+"\n"+"> FLIGHT PLAN" + "\n"+spacer);
console.log("* Clear for takeoff: YES")


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.