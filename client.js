$(document).ready(readyNow);

function readyNow() {
  $('#goButton').on('click', buttonClick);
}

function buttonClick(){
  console.log('button clicked');
  for(let employee of bonusCalculator(employees)) {
    $('#employeeList').append(
        `<li><h3>${employee.name}</h3>
          <div class="employeeData">
             <h4>Bonus Percentage: ${employee.bonusPercentage*100}%</h4>
             <h4>Total Bonus: $${employee.totalBonus}</h4>
             <h4>Total Compensation: $${employee.totalCompensation}</h4>
          </div>    
        </li>`);
  }
}

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

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//a master function to run all subfunctions and create a result object from the results 



//a function that takes in a rating and returns a bonus percentage
function ratingBonus(rating) {
  if(rating <= 2) {
    return 0;
  } else if (rating <= 3) {
    return 0.04
  } else if(rating <= 4) {
    return  0.06;
  } else if (rating === 5) {
    return 0.1;
  }
}//end ratingBonus
console.log(ratingBonus(5));



//a function that takes in an employee number and returns an additional bonus if employee number has 4 digits
function seniorityBonus(employeeNumber){
  // checks if employee is a senior employee (id has four digits)
  if(employeeNumber.length === 4){
    return 0.05;
  }else{
    return 0;
  }
}
console.log(`input '6243', output:`, seniorityBonus('62430'));

//a function that takes in an annual income and reduces bonus percentage to 1% if annual income > $65,000

function salaryBonus ( salary ) {
  console.log(Number(salary));
  
  if ( Number(salary) > 65000 ){
    return -0.01;
  } else {
    return 0;
  }
} // end currentSalary
 console.log(`input 65001, output ${salaryBonus('65001')}`);
 

//a function that checks bonus percent and reduces to 13% if > 13%

function clampBonus(bonus){
  if(bonus > .13){
    bonus = .13;
  }else if(bonus < 0){
    bonus = 0;
  }

  return bonus;
}

let testVal = -.14;
console.log(`Input: ${testVal}, output: ${clampBonus(testVal)}`);

// bonusCalculator 
// accepts employee object
// returns employeeBonus object

function bonusCalculator ( employees ) {
  let bonusArray = [];

  for(let employee of employees){
    let ratingBonusCalc = ratingBonus(employee.reviewRating);
    let seniorityBonusCalc = seniorityBonus(employee.employeeNumber);
    let salaryBonusCalc = salaryBonus(employee.annualSalary);
    let bonus = ratingBonusCalc + seniorityBonusCalc + salaryBonusCalc;
    let finalBonus = clampBonus(bonus);
    //console.log(employee.annualSalary * (finalBonus + 1));
    //console.log(employee.annualSalary * finalBonus + employee.annualSalary);
    let totalBonusCalc = Math.round(employee.annualSalary * finalBonus)
    
    let employeeBonus = { 
      name: employee.name,
      bonusPercentage: finalBonus,
      totalCompensation: totalBonusCalc + Number(employee.annualSalary),
      totalBonus: totalBonusCalc
    };
    bonusArray.push(employeeBonus);
  }

  return bonusArray;
}

console.log(bonusCalculator( employees ));



console.log( employees );


