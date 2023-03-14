// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const hq = 42;
  return Math.abs(hq - someValue);
}

function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  const feetPerBlock = 264; // 1 block = 264 feet
  const feet = blocks * feetPerBlock;
  return feet;
}
function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  const feetPerBlock = 264; // 1 block = 264 feet
  const feetTravelled = blocksTravelled * feetPerBlock;
  return feetTravelled;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare;

  if (distance <= 400) {
    fare = 0;
  } else if (distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    fare = 25;
  } else {
    return 'cannot travel that far';
  }

  return fare;
}
