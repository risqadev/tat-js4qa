const faker = require('faker');
const { hogwartsHouses, wizardPowers } = require('./constants');

class Human {
  constructor(name = faker.name.firstName(), age = faker.datatype.number(99)) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return Math.random() > 0.5 ? 'Hi' : 'Hello';
  }

  introduce() {
    return `${this.greet()}, I'm ${this.name}.`;
  }
}

class Wizard extends Human {
  constructor(name = faker.name.firstName(), age = faker.datatype.number(150), powers = []) {
    super(name, age);
    this.house = hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
    this.powers = [...powers];
  }

  randomPower() {
    if (!!this.powers.length) {
      const randomIndex = Math.floor(Math.random() * this.powers.length);
      return this.powers[randomIndex];
    } else {
      return false;
    }
  }

  introduce() {
    const power = this.randomPower();
    const powerPhrase = (!!power && `One of my powers is ${power}.`) || "I haven't developed any power yet, but I'm learning.";

    return `${this.greet()}, I'm ${this.name}, wizard of ${this.house} house. ${powerPhrase}`;
  }
}

const randomPerson = new Human();
const geofrey = new Human('Geofrey', 66);

const randomWizard = new Wizard();
const merlin = new Wizard('Merlin', 245, wizardPowers);

console.log(randomPerson.introduce());
console.log(geofrey.introduce());

console.log(randomWizard.introduce());
console.log(merlin.introduce());