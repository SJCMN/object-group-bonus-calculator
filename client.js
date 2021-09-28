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



//a function that takes in an annual income and reduces bonus percentage to 1% if annual income > $65,000



//a function that checks bonus percent and reduces to 13% if > 13%

console.log( employees );
