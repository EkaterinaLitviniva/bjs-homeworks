"use strict";

function getSolutions(a,b,c){
  const D = Math.pow(b, 2) - 4 * a * c;
  let x1;
  let x2;
  if (D > 0){
        x1 = (-b + Math.sqrt(D)) / 2 * a;
        x2 = (-b - Math.sqrt(D)) / 2 * a;
    return {D: D, roots: [x1,x2]};
  } else if (D == 0){
    x1 = -b / (2 * a);
    return {D: D, roots: [x1]};
  } else {
    return {D: D, roots: []};
  }
}

function showSolutionsMessage(a,b,c){
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}. \nЗначение дискриминанта: ${result.D}`)
    if (result.D > 0){
        return `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
     }else if (result.D == 0){
       return `Уравнение имеет один корень X₁ = ${result.roots[0]}`
    }else {
        return `Уравнение не имеет вещественных корней.`
    }
}

function getAverageScore(data){
    let result = new Object();
    for (let i in data){
      result[i] = getAverageMark(data[i]);
    }
    result.average = getAverageMark(Object.values(result));
return result;
}

function getAverageMark(marks){
    let summ = 0;
    if (marks.length == 0){
      return 0;
    }else {
    for (let i = 0; i <= marks.length-1; i++){
        summ += Number(marks[i]);
        } 
    return summ / marks.length;
}
}

