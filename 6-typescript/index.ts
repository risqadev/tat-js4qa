import {person, people, dbActions, requestActions, basicColors} from './types';

/* Inferência */
let fullName = "Florisvaldo Eustáquio";

/**
 * Não é possível atribuir um valor de outro tipo para uma variável do tipo string (o tipo foi inferido na inicialização).
 * Com o TS os erros de tipos já são barrados em tempo de desenvolvimento e de compilação, ou seja, se a linha acima fosse descomentada o código já daria erro e não iria para produção.
 */

//fullName = false;
fullName = "Outro Nome";

console.log(fullName);

/**
 * Quando não inicializada na declaração ela poderá receber qualquer tipo (any).
 */

let age;
age = 30;
age = "uma string";
age = false;

console.log(age);

const aPerson: person = {
    name: 'Gilbert Grape',
    age: 30,
    pronoum: 'he',      // só aceita os valores 'he' ou 'she'
    isMarried: false,   // pode estar presente ou não
    // other: 'office'  // não faz parte do tipo
}

console.log(aPerson);

const personList: people = [aPerson, { name: 'Han Solo', age: 60, pronoum: 'he' } ];

console.log(personList);

console.log(
    dbActions.create,
    dbActions.delete,
    dbActions.read,
    dbActions.update
);

console.log(
    requestActions.get,
    requestActions.delete,
    requestActions.post,
    requestActions.patch,
    requestActions.put
);

console.log(
    basicColors.red,
    basicColors.blue,
    basicColors.green
);