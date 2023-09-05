const add = (a, b) => {
    return a + b
}

console.log(add(3, 5))



const multiply = (a, b) => {
    return a * b
}

console.log(multiply(3, 5))



const getNumberSign = (num) => {
    if(num > 0){
        return 'postive'
    }
    else if(num === 0){
        return 'zero'
    }
    else{
        return 'negative'
    }
}

console.log(getNumberSign(0))




const isValidLength = (phoneNumber) => {
    let validLength = 11;
    if (phoneNumber.length === validLength) {
      return true;
    } else {
      return false;
    }
  }

console.log(isValidLength("11111111111"))



const fizzbuzz = function (num){
    if(num % 3 === 0 && num % 5 === 0){
        return 'fizzbuzz'
    } else if(num % 5 === 0){
        return 'buzz'
    } else if(num % 3 === 0){
        return 'fizz'
    }else{
        return num
    }
}

console.log(fizzbuzz(15))


const getParity = function(num) {
    if(num % 2 == 0){
        return 'even'
    } else {
        return 'odd'
    }
}
    

for(let i = 0; i <= 20; i++){
    const parity = getParity(i)
    console.log(`${i} is ${parity}`)
}

for(let i = 0; i <= 10; i++){
    const parity = fizzbuzz(i)
    console.log(`${parity}`)
}

