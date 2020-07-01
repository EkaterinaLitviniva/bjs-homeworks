function parseCount(count) {
    if(isNaN(parseInt(count))) {
      const countError = new Error("Невалидное значение");
      throw countError;
    }
    return parseInt(count);
}
  
function validateCount(count) {
  try {
    return parseCount(count);
  } catch(countError) {
    return countError;
  }
}

class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if((a+b) < c || (a+c) < b ||| (b+c) < a) {
      const triangleError = new Error ('Треугольник с такими сторонами не существует');
      throw triangleError;
    }
  }
  getPerimeter(a,b,c) { 
    if (a || b || c === undefined) {
      return 'Ошибка! Неправильный треугольник';
    }
      return (this.a + this.b + this.c);
  }
  getArea(a,b,c) {
    if (a || b || c === undefined) {
      return 'Ошибка! Неправильный треугольник';
    }
    let p = (this.a + this.b + this.c) / 2;
    let s = Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
    return s.toFixed(3);
  }
}

function getTriangle(a,b,c) {
  try {
    return new Triangle(a,b,c);
  } catch(triangleError) {
    let t = new Triangle();
    t.getPerimeter();
    t.getArea();
    return  t;
    }
   }