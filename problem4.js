function findingBadData(inputArray) {
    let badDataCount = [];
    
    for (let i = 0; i < inputArray.length; i++) {
      if (typeof inputArray[i] !== "number") {
        return "Please input number";
      }
      if (inputArray[i] < 0) {
        badDataCount++;
      }
      
    }
    return badDataCount;
  }
  const dataCount = findingBadData ([-4, -9,  -33, -55, 25, 14]);
  console.log("Bad Data Count = ",dataCount);
  
  

 