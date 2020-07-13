function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

function compareArrays( arr1, arr2 ) {
    return arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
}

function memorize(fn, limit){
    const memory = [];
    if (limit === undefined || limit == 0){
       throw new Error("Не задано число сохраняемых значений");;
       };
    return  function innerFunc(...args){
      let exist = memory.find(item => compareArrays(item.args,args));
      if (exist){
        return exist.result
      } else if (limit == memory.length) {
        memory.shift();
      };
      memory.push({args: args, result: fn(...args)});
        return memory[memory.length-1].result
      
    };
};

function testCase(testFunction,timer){
    array = [[1,2,3],[1,2],[1,2,3],[1,2],[9,5,2,4],[15,26,178,4],[2],[67,345,768,45,34,2]];
    let  i = 0;
    const summa = memorize(sum,100);
    while (i != 15){
      array.forEach(function(item, i, ...arr){summa(item);});
      i++
    };
};   
  
  console.time('timer1');
  testCase(sum,'timer1');
  console.timeEnd('timer1');
  
  //sum timer1: 853.102ms
  //msum timer1: 7.427ms