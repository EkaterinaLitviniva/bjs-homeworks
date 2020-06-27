function parseCount(count) {
    if(isNaN(parseInt(count))) {
      countError = new Error("Невалидное значение");
      throw countError;
    }
    return parseInt(count);
}
  
  let countError;
  
function validateCount(count) {
  try {
    return parseCount(count);
  } catch(e) {
    return countError;
  }
}

class Triangle {
  constructor(a,b,c) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.p = this.getPerimeter(a,b,c);
      this.s = Number(this.getArea(a,b,c));
      if((a+b) < c) {
        throw new Error ('Треугольник с такими сторонами не существует')
      }
    }
    getPerimeter() { 
       let p = (this.a + this.b + this.c);
        return p;
    }
    getArea() {
      let p2 = (this.a + this.b + this.c) / 2;
      let s = Math.sqrt(p2 * (p2 - this.a) * (p2 - this.b) * (p2 - this.c));
      return s.toFixed(3);
    }
}
  
function getTriangle(a,b,c) {
  try {
    return new Triangle(a,b,c);
  } catch(e) {
    
    return 'Ошибка! Треугольник не существует';
  }
}
  