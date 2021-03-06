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

computers.some(computer => computer.ram > 16);

const names = ['Alexandria', 'Matthew', 'Joe'];

names.every(name => name.length > 4);

names.some(name => name.length > 4);

function FieldOld() {
  this.valueOld = valueOld;
}

FieldOld.prototype.validateOld = function() {
  return this.valueOld.length > 0;
};

class Field {
  constructor(value) {
    this.value = value;
  }
  validate() {
    return this.value.length > 0;
  }
}

const username = new Field('Bill');
const password = new Field('my_password');
const birthDate = new Field('10/10/2020');

username.validate() && password.validate() && birthDate.validate();

const fields = [username, password, birthDate];

const formIsValid = fields.every(field => field.validate());

formIsValid;

// Coding Exercise 1 - Finding Submitted Users
const users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

const hasSubmitted = users.every(user => user.hasSubmitted === true);

hasSubmitted;

// Coding Exercise 2 - In Progress Network Requests
const requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

const inProgress = requests.some(request => request.status === 'pending');

inProgress
