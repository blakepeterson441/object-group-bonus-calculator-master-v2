const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//Blake's Notes
/*function 
  in employee
  out new object w/
    -name = employee.name
    -bonus % = calculate (another function)
    -total comp = employee.annualSalary + totalBonus
    -total Bonus = employee.annualSalary * bonus%/100
  */
/*
function bonus Calculation
 rating = 2 -> no bonus
 rating = 3 -> 4% bonus
 rating = 4 -> 6% bonus
 rating = 5 -> 10% bonus

 if emp# is 4 digits -> +5% more
 if income > 65k -> 1% less
 no bonus > 13%
          < 0%
*/
/*Atticus
  4% + 5%
*/
  
//Start with a for loop to go across employee array and just log each one.
//Then I'm going to write a new function to return the new object for each employee

for (let i=0; i<employees.length; i++){
  let anEmployee = employees[i];
  console.log('an employee', anEmployee);
  let bonusInfo = getBonusInfo(anEmployee);
  console.log(bonusInfo);
}

// This function takes in an employee and gives back information including their
// name, bonus percentage, total bonus, total compensation
function getBonusInfo(employee){
  let bonusInfo = {};
  bonusInfo.name = employee.name;
  bonusInfo.bonusPercentage = bonusCalculation(employee);
  bonusInfo.totalBonus = Math.round(Number(employee.annualSalary) * (bonusInfo.bonusPercentage / 100) );
  bonusInfo.totalCompensation = Number(employee.annualSalary) + bonusInfo.totalBonus;

  return bonusInfo;
}

// This function takes in an employee and uses their review rating,
// employee Number, & annual salary to determine their bonus. No bonus can
// be less than 0 or greater than 13%.
function bonusCalculation( employee ){
  let bonusPercent = 0;
  console.log('calculating bonus percentage');

  // Determine base bonus percentage
  if ( employee.reviewRating <= 2 ) {
    // no bonus, already set to 0
    bonusPercent = 0;
    //re-setting the value 
  } else if ( employee.reviewRating === 3 ) {
    bonusPercent = 4;
  } else if (employee.reviewRating === 4) {
    bonusPercent = 6;
  } else if (employee.reviewRating === 5) {
    bonusPercent = 10;
  } 
  
  //once I determine the base bonus percentage, may need to adjust it
  if (employee.employeeNumber.length === 4 ) {
    bonusPercent += 5;
  }

  //
  if ( employee.annualSalary > 65000 ) {
    bonusPercent -= 1;
  }

  if ( bonusPercent < 0 ) {
    bonusPercent = 0;
  } else if( bonusPercent > 13) {
    bonusPercent = 13;
  }

  return bonusPercent;
}

// Get an employee to test with!
const Atticus = employees[0];
const atticusBonusInfo = getBonusInfo(Atticus);
console.log('Name should be Atticus:', atticusBonusInfo.name);
console.log('Bonus percentage should be 9:', atticusBonusInfo.bonusPercentage);
console.log('Total bonus should be 4230:', atticusBonusInfo.totalBonus);
console.log('Total compensation should be 51230:', atticusBonusInfo.totalCompensation);

const Jem = employees[1];
const jemBonusInfo = getBonusInfo(Jem);
console.log('Name should be Jem:', jemBonusInfo.name);
console.log('Bonus percentage should be ???:', jemBonusInfo.bonusPercentage);
console.log('Total bonus should be ???:', jemBonusInfo.totalBonus);
console.log('Total compensation should be ???:', jemBonusInfo.totalCompensation);

const Scout = employees[2];
const scoutBonusInfo = getBonusInfo(Scout);
console.log('Name should be Scout:', scoutBonusInfo.name);
console.log('Bonus percentage should be ???:', scoutBonusInfo.bonusPercentage);
console.log('Total bonus should be ???:', scoutBonusInfo.totalBonus);
console.log('Total compensation should be ???:', scoutBonusInfo.totalCompensation);

const Robert = employees[3];
const robertBonusInfo = getBonusInfo(Robert);
console.log('Name should be Robert:', robertBonusInfo.name);
console.log('Bonus percentage should be ???:', robertBonusInfo.bonusPercentage);
console.log('Total bonus should be ???:', robertBonusInfo.totalBonus);
console.log('Total compensation should be ???:', robertBonusInfo.totalCompensation);

const Mayella = employees[4];
const mayellaBonusInfo = getBonusInfo(Mayella);
console.log('Name should be Mayella:', mayellaBonusInfo.name);
console.log('Bonus percentage should be ???:', mayellaBonusInfo.bonusPercentage);
console.log('Total bonus should be ???:', mayellaBonusInfo.totalBonus);
console.log('Total compensation should be ???:', mayellaBonusInfo.totalCompensation);






//console.log( employees );
