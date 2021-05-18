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

console.log(spacer+"\n"+"> FUEL DATA"+"\n"+spacer);


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.