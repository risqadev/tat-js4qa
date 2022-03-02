function calculateSalesComission(itens) {
    const specialProductId = 'XP-0101';
    let foundSpecialProduct = false;

    const totalAllItensValue = itens.reduce((acc, {id, value, quantity}) => {
        if (id === specialProductId) foundSpecialProduct = true;
        const totalItemValue = value * quantity;
        return acc + totalItemValue;
    }, 0);

    let comissionTax = 0.05;
    if (foundSpecialProduct) comissionTax = 0.2;
    else if (totalAllItensValue >= 5000) comissionTax = 0.15;
    else if (totalAllItensValue >= 2000) comissionTax = 0.1;
    
    return totalAllItensValue * comissionTax;
}

module.exports = calculateSalesComission;