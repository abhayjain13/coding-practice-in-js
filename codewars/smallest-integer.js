// Link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var temp = args[0];
    for (let i = 1; i < args.length; i++) {
      if (temp > args[i]) {
        temp = args[i];
      }
    }
    return temp;
  }
}

const data = new SmallestIntegerFinder();
console.log(data.findSmallestInt([34, 15, 88, 2, 5]));
