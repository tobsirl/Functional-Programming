const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

let allComputersCanRunProgram = true;
let onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
  let computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

allComputersCanRunProgram;
onlySomeComputersCanRunProgram;

computers.every(computer => computer.ram > 16); 
