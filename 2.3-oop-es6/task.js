class Weapon {
    constructor(weaponObj) {
        this.name = weaponObj.name;
        this.attack = weaponObj.attack;
        this.durability = weaponObj.durability;
        this.range = weaponObj.range;
        this.startDurability = weaponObj.durability;
        }
    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0 ) {this.durability = 0};
        }
    getDamage() {
        if (this.durability >= this.startDurability * 0.3) {
            return this.attack;
           } else if (this.durability == 0) {
            return 0;
           } else {  
            return (this.attack/2);
           }
    }
    isBroken() {
        if (this.durability > 0) {
          return false;
        } else {
            return true;
          }
      }
}

class Arm extends Weapon {
    constructor (weapon){
      super({
        name: 'Рука',
        attack: 1,
        durability: 1/0,
        range: 1,
      });
    }
}

class Bow extends Weapon {
    constructor (weapon){
      super({
        name: 'Лук',
        attack: 10,
        durability: 200,
        range: 3,
      });
    }
}

class Sword extends Weapon {
    constructor (weapon){
      super({
        name: 'Меч',
        attack: 25,
        durability: 500,
        range: 1,  
      });
    }
  }
  
  class Knife extends Weapon {
    constructor (weapon){
       super({
        name: 'Нож',
        attack: 5,
        durability: 300,
        range: 1,
      });
    }  
  }
  
  class Staff extends Weapon {
    constructor (weapon){
      super({
        name: 'Посох',
        attack: 8,
        durability: 300,
        range: 2,
      });
    }
  }
  
  class LongBow extends Bow {
    constructor (){
      super();
      this.name = 'Длнный лук';
      this.attack = 15;
      this.range = 4;
    }
  }
  class Axe extends Sword {
    constructor (){
      super();
      this.name = 'Секира';
      this.attack = 27;
      this.durability = 800;
    }
  }
  class StormStaff extends Staff {
    constructor (){
      super();
      this.name = 'Посох бури';
      this.attack = 10;
      this.range = 3;
    }
  }

  class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    getName() {
      return this.name;
    }
    addGrade(grade, subject) {
      if (typeof(grade) != "number" || grade < 1 || grade > 5) {
         alert(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`)
         return this.marks[subject].length;
      } else if (typeof(this.marks[subject]) == 'undefined') {
          this.marks[subject] = new Array();
      }
      this.marks[subject].push(grade);
      return this.marks[subject].length;
    }
    getAverageBySubject(subject) {
      if (subject == 0 || subject == 'undefined') {
        return 0;
      } else {
        let summ = 0;
        for (let i = 0; i <= this.marks[subject].length - 1; i++){
          summ += this.marks[subject][i];
          } 
        return summ / this.marks[subject].length;
      }
    }
    getTotalAverage(){
        let sum = 0;
        let arrSubjects = Object.getOwnPropertyNames(this.marks);
      for (let i in arrSubjects){
         sum += this.getAverageBySubject(arrSubjects[i]);
      }
        return sum / arrSubjects.length;
    }
  }
    