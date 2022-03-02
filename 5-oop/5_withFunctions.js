const faker = require('faker');
const { hogwartsHouses, wizardPowers } = require('./constants');

const Human = (name = faker.name.firstName(), age = faker.datatype.number(99)) => {
  return {
    name,
    age,
    greet() {
      return Math.random() > 0.5 ? 'Hi' : 'Hello';
    },
    introduce() {
      return `${this.greet()}, I'm ${this.name}.`;
    }
  }
}

const Wizard = (name = faker.name.firstName(), age = faker.datatype.number(150), powers = []) => {
  const wizard = Human(name, age);
  wizard.house = hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
  wizard.powers = [...powers];

  wizard.randomPower = function () {
    if (!!this.powers.length) {
      const randomIndex = Math.floor(Math.random() * this.powers.length);
      return this.powers[randomIndex];
    } else {
      return false;
    }
  }

  wizard.introduce = function () {
    const power = this.randomPower();
    const powerPhrase = (!!power && `One of my powers is ${power}.`) || "I haven't developed any power yet, but I'm learning.";

    return `${this.greet()}, I'm ${this.name}, wizard of ${this.house} house. ${powerPhrase}`;
  }

  return wizard;
}

const randomPerson = Human();
const geofrey = Human('Geofrey', 66);

const randomWizard = Wizard();
const merlin = Wizard('Merlin', 245, wizardPowers);

console.log(randomPerson.introduce());
console.log(geofrey.introduce());

console.log(randomWizard.introduce());
console.log(merlin.introduce());