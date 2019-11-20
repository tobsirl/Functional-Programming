const heroes = [
  { name: 'Hulk', strength: 50000 },
  { name: 'Spider-Man', strength: 25000 },
  { name: 'Hawk Eye', strength: 136 },
  { name: 'Thor', strength: 100000 },
  { name: 'Black Widow', strength: 136 },
  { name: 'Vision', strength: 5000 },
  { name: 'Scarlet Witch', strength: 60 },
  { name: 'Mystique', strength: 120 },
  { name: 'Namora', strength: 75000 },
  { name: 'Captain America', strength: 362 },
  { name: 'Deadpool', strength: 1814 },
  { name: 'Black Panther', strength: 1814 }
];

//* .find()
function isHulk(hero) {
  return hero.name === 'Hulk';
}

const hulk = heroes.find(isHulk);

console.log(hulk);

//* .map()
function doubleStrength(hero) {
  return hero.strength * 2;
}

const strength2x = heroes.map(doubleStrength);

console.log(heroes);

console.log(strength2x);

//* .filter()
function strong(hero) {
  return hero.strength >= 200;
}

const tuff = heroes.filter(strong);

console.log(tuff);

//* .concat()
const extras = [
  { name: 'Cyclops', strength: 136 },
  { name: 'Gambit', strength: 136 }
];

const more = heroes.concat(extras);

console.log(more);

//* .flatMap()
function space(hero, i) {
  return i > 0 && i % 5 === 0 ? ['<hr/>', hero.name] : [hero.name];
}

const list = heroes.flatMap(space);

console.log(list);

//* .join()
function getName(hero) {
  return hero.name;
}

const join = heroes.map(getName).join('\n');

console.log(join);

//* .every()
function strong(hero) {
  return hero.strength >= 200;
}

const tuffguys = heroes.every(strong);

console.log(tuffguys);

//* .some()
function strength60(hero) {
  return hero.strength === 60;
}

const find60 = heroes.some(strength60)

console.log(find60);

//* .includes()
const hulkIn = heroes.map(getName).includes('Hulk')

console.log(hulkIn);

//* map + filter combo
const result = heroes
  .map(hero => {
    return { name: hero.name, strength: hero.strength };
  })
  .filter(name => {
    return name.name === 'Hulk';
  });

console.log(result);
