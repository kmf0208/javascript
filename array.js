const addTobBatch = (arr, num) => {
    if(arr.length >= 5){
        return arr
    }
    return arr.concat(Number)

}



const checkLength = (phoneNum) =>{
    if(phoneNum.length <= 10){
        return true
    }else{
        return false
    }

}

console.log(checkLength('121qqs oqusq   s1'))

const check = (arr) =>{
    return arr.filter((word) => word.length >6)
}


const inputArray = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const filteredArray = check(inputArray);
console.log(filteredArray);


const cohorts = [
    {
        cohortName: 'may2020',
        id: '123',
        students: ['ahmed', 'khalifa', 'fathi']
    },
];

const checkStudents = (cohorts) => {
    return cohorts.map(cohort => {
        return `${cohort.id} - ${cohort.cohortName} - ${cohort.students.length} students in the cohort`;
    });
}

const result = checkStudents(cohorts);
console.log(result);

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

  const generateMessages = (namesAndDiscounts) => {
    return namesAndDiscounts.map((ele) =>{
        return `Hi ${ele.name}! ${ele.discount}% of our best candies for you today!`;
    })
  }
  


  const output = generateMessages(namesAndDiscounts);
  console.log(output);
  
