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
      console.log(`длина массива=${memory.length}`);
      let exist = memory.find(item => compareArrays(item.args,args));
      if (exist != undefined){
       return exist.result
      } else if (limit == memory.length-1) {
        memory.shift();
      } else {
        memory.push({args: args, result: fn(...args)});
        return memory[memory.length-1].result
      } 
    };
};

