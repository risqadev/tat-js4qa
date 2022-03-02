export type person = {
    name: string,
    age: number,
    pronoum: 'he' | 'she',
    isMarried?: boolean // ? depois do nome define como não obrigatório
}

export type people = Array<person>

export enum dbActions {
    create,
    read,
    update,
    delete
}

export enum requestActions {
    get = 1,
    post,
    patch,
    put,
    delete
}

export enum basicColors {
    red = 'red',
    green = 'green',
    blue = 'blue'
}