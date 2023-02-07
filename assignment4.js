

function mindGame(input) {
  const outPut = (input * 3 + 10) / 2 - 5;
    return outPut;
  }
  let result = mindGame(5);
  console.log(result);
  


// Because the quotient is denoted by %, and if the quotient is 0 then it is an even number and if it is not 0 then it is an odd number.
function evenOdd(string) {
  let length = string.length;
  if (length % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
const input = evenOdd("Misam");
console.log(input);


// The Math.abs() static method returns the absolute value of a number.

function isLGSeven(number) {
  let diffInputValueAnd7 = number - 7;
  let different = Math.abs(number - 7)
  if(diffInputValueAnd7 < 7){
      return number - 7;
  }else if(different > 7){
      return number * 2;
  }
}




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



function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  const firstFriend = 21;
  const secondFriend = 32;
  const thirdFriend = 43;

  const firstFriendDiamond = firstFriendGems * firstFriend;
  const secondFriendDiamond = secondFriendGems * secondFriend;
  const thirdFriendDiamond = thirdFriendGems * thirdFriend;

  const totalDiamonds = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

  if(totalDiamonds > 1000 * 2){
      return totalDiamonds - 2000 ;
  }else{
      return totalDiamonds;
  }
}
