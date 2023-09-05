let counter = 0;

const increment = () => {
    counter++
    console.log(counter)
}

const count = (delay, callBackFunc) => {
    setInterval(callBackFunc, delay)
}
console.log(count(2000, increment));





