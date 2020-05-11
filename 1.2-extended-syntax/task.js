"use strict";

function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x1;
    let x2;
  if (d > 0){
    x1 = (-b - Math.sqrt(d)) / 2 * a;
    x2 = (-b + Math.sqrt(d)) / 2 * a;
    return [x1, x2];
  } else if (d == 0){
    x1 = -b / 2 * a;
    return [x1];
  } else {
    return [];
  }
}

function getAverageMark(marks){
    let summ = 0;
    if (marks.length == 0){
      return 0;
    } else if (marks.length > 5){
        console.log('Не более 5 оценок!');
        marks = marks.slice(0,4);
    }
        for (let i = 0; i <= marks.length-1; i++){
        summ += marks[i];
        } 
    return summ / marks.length;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result = (age >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
}