// Array utilizado nos exercícios

const employeeBonus = [12, 14, 78, 90, 100, 35, 14, 21]


// Exercício 1
// Método .maps() - const currentEmployeeBonus = employeeBonus.map(element => { return element * 2 })

const currentEmployeeBonus = arr => {
    let obj = []
    for (let i = 0; i < arr.length; i++) {
        const currentBonus = arr[i] * 2
        obj.push(currentBonus)
    }
    return console.log(obj)
}
currentEmployeeBonus(employeeBonus)


// Exercício 2 
// Método .filter() - const valuesGreaterThanThirty = employeeBonus.filter(element => {return element > 30})

const valuesGreaterThanThirty = (arr, element) => {
    let obj = []
    for (let i = 0; i < arr.length; i++) {
        const graterValues = arr[i]
        if (graterValues > element) obj.push(graterValues)
    }
    return console.log(obj)
}
valuesGreaterThanThirty(employeeBonus, 30)


// Exercício 3
// Método .reduce() - const bonusSum = employeeBonus.reduce((previousValue, currentValue) => { return currentValue + previousValue })

const bonusSum = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return console.log(sum)
}
bonusSum(employeeBonus)


// Exercício 4
// Método .find() - const found = employeeBonus.find(element => element > 30) 

const found = (arr, e) => {
    for (let i = 0; i < arr.length; i++) {
        const foundValue = arr[i]
        if (foundValue > e) return console.log(foundValue)
    }
}
found(employeeBonus, 30)


// Exercício 5
// Método .includes() - const trueOrFalse = employeeBonus.includes(12)

const trueOrFalse = (arr, e) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === e) return console.log(true)
    }
    return console.log(false)
}
trueOrFalse(employeeBonus, 12)


// Exercício 6
// Método .indexOf() - const findPosition = employeeBonus.indexOf(78)

const findPosition = arr => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        const position = arr[i]
        obj[i] = position
    }
    console.log(obj)
}
findPosition(employeeBonus)


// Array inalterado 

console.log(employeeBonus)