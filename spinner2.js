const arrOfSymbols = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   ', '\n'];
const spinner = (arr) => {
  for (let el = 0; el < arr.length; el++) {
    setTimeout(()=>{
      process.stdout.write('\r' + arr[el]);
    }, el * 200);
  }
};
spinner(arrOfSymbols);
