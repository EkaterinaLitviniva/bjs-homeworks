"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let P = (Number(percent) / 100) / 12;
    let S = Number(amount) - Number(contribution);
    let n = Number(date);
    let amountMonth = S*(P+P/(Math.pow(1+P, n)-1));
    let totalAmount = amountMonth * n

    return totalAmount.toFixed(2);
}

function getGreeting(name = 'Аноним') {
    let greeting = `Привет, мир! Меня зовут ${name}.`
    
    return greeting;
}