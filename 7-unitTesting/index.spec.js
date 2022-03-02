const calculateSalesComission = require('./index');

it('se a lista estiver vazia, a comissão é zero', () => {
    const resultadoObtido = calculateSalesComission([]);
    const resultadoEsperado = 0;

    expect(resultadoObtido).toBe(resultadoEsperado);
})

it('calcula comissão quando só há um item na lista', () => {
    const item = {
        id: 'PROD-123',
        value: 1999.99,
        quantity: 1
    }
    const comissionTax = 0.05;

    const resultadoObtido = calculateSalesComission([item]);
    const resultadoEsperado = item.value * item.quantity * comissionTax;

    expect(resultadoObtido).toBe(resultadoEsperado);
})

it('calcula comissão quando há mais de um item na lista', () => {
    const item1 = {
        id: 'PROD-123',
        value: 1000,
        quantity: 1
    }
    const item2 = {
        id: 'PROD-125',
        value: 999.99,
        quantity: 1
    }
    const comissionTax = 0.05;

    const resultadoObtido = calculateSalesComission([item1, item2]);
    const resultadoEsperado = ((item1.value * item1.quantity) + (item2.value * item2.quantity)) * comissionTax;

    expect(resultadoObtido).toBe(resultadoEsperado);
})

it('calcula comissão de 10% no limite inferior', () => {
    const item1 = {
        id: 'PROD-123',
        value: 1000,
        quantity: 1
    }
    const item2 = {
        id: 'PROD-125',
        value: 1000,
        quantity: 1
    }
    const comissionTax = 0.1;

    const resultadoObtido = calculateSalesComission([item1, item2]);
    const resultadoEsperado = ((item1.value * item1.quantity) + (item2.value * item2.quantity)) * comissionTax;

    expect(resultadoObtido).toBe(resultadoEsperado);
})

it('calcula comissão de 15% no limite inferior', () => {
    const item1 = {
        id: 'PROD-123',
        value: 1000,
        quantity: 3
    }
    const item2 = {
        id: 'PROD-125',
        value: 1000,
        quantity: 2
    }
    const comissionTax = 0.15;

    const resultadoObtido = calculateSalesComission([item1, item2]);
    const resultadoEsperado = ((item1.value * item1.quantity) + (item2.value * item2.quantity)) * comissionTax;

    expect(resultadoObtido).toBe(resultadoEsperado);
})

it('calcula comissão de 20% com o produto com id "XP-0101"', () => {
    const item1 = {
        id: 'PROD-123',
        value: 450,
        quantity: 1
    }
    const item2 = {
        id: 'XP-0101',
        value: 50,
        quantity: 1
    }
    const comissionTax = 0.2;

    const resultadoObtido = calculateSalesComission([item1, item2]);
    const resultadoEsperado = ((item1.value * item1.quantity) + (item2.value * item2.quantity)) * comissionTax;

    expect(resultadoObtido).toBe(resultadoEsperado);
})