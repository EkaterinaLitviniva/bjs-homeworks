function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x1;
    let x2;
  if (d > 0){
    x1 = (-b - Math.sqrt(b)) / 2 * a;
    x2 = (-b + Math.sqrt(b)) / 2 * a;
  } else if (d == 0){
    x1 = -b / 2 * a;
    x2 = '';
  } else {
    x1 = '';
    x2 = '';
  }
return [x1, x2]
}

function getAverageMark(marks){
    count = marks.length;
    let averageMark 
    if (count == 0){
      averageMark = 0;
    } else if (count > 5){
        console.log('Не более 5 оценок!');
        averageMark = marks.splice(0,4);
    } else if (count <= 5){
        let summ = 0;
        for (let i = 0; i <= count; i++){
        summ += marks[i];
        } 
        averageMark = summ / count;
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let data = new Date();
    let yearOfBirtday = dateOfBirthday.getFullYear();
    let yearToday = data.getFullYear();
    let age = yearToday - yearOfBirtday;
    let result = (age >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
}