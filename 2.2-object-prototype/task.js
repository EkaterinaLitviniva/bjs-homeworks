function getAnimalSound(animal) {
    if (animal == undefined){
      return null;
    } else {
      let animalSound = animal.sound;
      return animalSound;
    }
}

function getAverageMark(marks) {
    let summ = 0;
    if (marks.length == 0){
      return 0;
    } else {
    for (let i = 0; i <= marks.length-1; i++){
        summ += Number(marks[i]);
        } 
      let roundedAverage = Math.round(summ / marks.length);
      return roundedAverage;
    }
}

function checkBirthday(birthday) {
    let now = Math.round(new Date().getTime()/1000.0);
    let b = Number(Date.parse(birthday)) / 1000.0;
    let age = Math.round((now - b) / 31556926); 
    return age >= 18;
}