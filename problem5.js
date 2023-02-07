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
        return totalDiamonds
    }
  }
  const result = gemsToDiamond(1, 1, 1);
  console.log(result);
  const result1 = gemsToDiamond(20, 200, 50);
  console.log(result1);
  const result2 = gemsToDiamond(100, 5, 1);
  console.log(result2);

//   Done