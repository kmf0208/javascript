const doubleNumber = (n) => 2*n
let newSalary = doubleNumber(1000000)
console.log(newSalary)


const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
  }
  
  const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`;
  }
  
  const notify = (emailOrPhone, notifyFunction) => {
    return notifyFunction(emailOrPhone);
  }
  
  console.log(notify('hello@makers.tech.test', notifyByEmail));
  console.log(notify('+10000000000', notifyByText));




  const printHello = ()=> {
    console.log('Hello!')
  }

  const executeAfterDelay = (delay, callBackFunc)=> {
    setTimeout(callBackFunc, delay * 1000)
  }

  console.log(executeAfterDelay(5, printHello))