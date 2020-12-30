// Link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function (busStops) {
  let peopleLeft = 0;
  for (let i = 0; i < busStops.length; i++) {
    peopleLeft += busStops[i][0] - busStops[i][1];
  }
  return peopleLeft;
};
