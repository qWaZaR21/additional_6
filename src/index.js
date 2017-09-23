module.exports = function zeros(expression) {
  let zero = 0;
  let two = 0;
  let five = 0;
  const exprArr = expression.split('*');
  for (let i = 0; i < exprArr.length; i++) {
      two += HowManyTwo(exprArr[i]);
      five += HowManyFive(exprArr[i]);
  }
  zero = Math.min(two,five);
  return zero;
}

const factor_double = expression => {
  if (expression[expression.length - 2] == '!') {
    return true;
}
  return false;
}

const factor_chet = expression => {
  if (parseInt(expression, 10) % 2 == 0) {
      return true;
  }	
  return false;
}

const HowManyTwo = expr => {
  const num_const = parseInt(expr, 10);
  let num = 0;
  let two = 0;
  if ( factor_chet(expr) || !factor_double(expr) ) {
    for(let i = 2; i < num_const; i = i + 2){
      for(num = i; num % 2 == 0; num = num / 2){
       two++;
      }
    }
  }
  return two;
}


const HowManyFive = expr => {
  const num_const = parseInt(expr, 10);
  let num = 0;
  let five = 0;
  if ( !factor_double(expr) ) {
    for(let i = 5; i <= num_const; i = i + 5){
      for (num = i; num % 5 == 0; num = num / 5){
       five++;
      }
    }
  }
  if ( factor_double(expr) && factor_chet(expr)) {
    for (let i = 10; i <= num_const; i = i + 10){
      for (num = i; num % 5 == 0; num = num / 5){
       five++;
      }
    }
  }
  if ( factor_double(expr) && !factor_chet(expr)) {
    for (let i = 5; i <= num_const; i = i + 10){
      for (num = i; num % 5 == 0; num = num / 5){
       five++;
      }
    }
  }
  return five;
}