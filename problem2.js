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

//   Done