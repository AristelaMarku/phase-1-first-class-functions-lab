// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers=function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers=(drivers)=>drivers.slice(drivers.length-2,drivers.length)

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=(multiplier)=>function(fare){return fare*multiplier}


const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return  returnFirstTwoDrivers(drivers)
}
