function isLGSeven(number) {
    let diffInputValueAnd7 = number - 7;
    let different = Math.abs(number - 7)
    // The Math.abs() static method returns the absolute value of a number.
    if(diffInputValueAnd7 < 7){
        return number - 7;
    }else if(different > 7){
        return number * 2;
    }
  }
  const inputValue = isLGSeven(18);
  console.log("Return = ",inputValue);
  

//   Done

