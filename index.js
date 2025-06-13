// Code your solution in this file!
// 1. Return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Function that returns a multiplier function
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// 5. Doubles a fare using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// 6. Triples a fare using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// 7. Select different drivers using a passed-in function
const selectDifferentDrivers = function(drivers, selectingFunction) {
  return selectingFunction(drivers);
};