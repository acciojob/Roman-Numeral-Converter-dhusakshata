function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	
  let result = '';

  for (let i = 0; i < 7; i++) {
    const [symbol, value] = obj[i];
    const count = Math.floor(num / value);

    if (count === 4 && i > 0) {
      
      const prevSymbol = obj[i - 1][0];
      result += symbol + prevSymbol;
    } else {
      result += symbol.repeat(count);
    }

    num %= value;
  }

  return result;
}

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
