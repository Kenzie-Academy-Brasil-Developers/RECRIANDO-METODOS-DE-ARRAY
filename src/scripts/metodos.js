// Array utilizado nos exercícios

const employeeBonus = [12, 14, 78, 90, 100, 35, 14, 21]


// Exercício 1
// Método .maps() - const currentEmployeeBonus = employeeBonus.map(element => { return element * 2 })

const callbackMap = element => {
    return element * 2
}

const currentEmployeeBonus = (arr, cb) => {
    let obj = []
    for (let i = 0; i < arr.length; i++) {
        obj.push(cb(arr[i], i, arr))
    }
    return obj
}
currentEmployeeBonus(employeeBonus, callbackMap)
console.log(currentEmployeeBonus(employeeBonus, callbackMap))


// Exercício 2 
// Método .filter() - const valuesGreaterThanThirty = employeeBonus.filter(element => {return element > 30})

const callbackFilter = element => {
    return element > 30
}

const valuesGreaterThanThirty = (arr, cb) => {
    let obj = []
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr) === true) {
            obj.push(arr[i])
        }
    }
    return obj
}
valuesGreaterThanThirty(employeeBonus, callbackFilter)
console.log(valuesGreaterThanThirty(employeeBonus, callbackFilter))

// Exercício 3
// Método .reduce() - const bonusSum = employeeBonus.reduce((previousValue, currentValue) => { return currentValue + previousValue })

const callbackReduce = (acc, cur) => {
    return acc + cur
}

const bonusSum = (arr, cb) => {
    let value = 0
    for (let i = 0; i < arr.length; i++) {
        value = cb(value, arr[i], i, arr)
    }
    return value
}
bonusSum(employeeBonus, callbackReduce)
console.log(bonusSum(employeeBonus, callbackReduce))

// Exercício 4
// Método .find() - const found = employeeBonus.find(element => element > 30) 

const callbackFind = element => {
    return element > 30
}

const found = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr) === true) {
            return arr[i]
        }
    }
}
found(employeeBonus, callbackFind)
console.log(found(employeeBonus, callbackFind))


// Exercício 5
// Método .includes() - const trueOrFalse = employeeBonus.includes(12)

const trueOrFalse = (arr, value, fromIndex = 0) => {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return true
        }
    }
    return false
}
trueOrFalse(employeeBonus, 12)
console.log(trueOrFalse(employeeBonus, 12))
console.log(trueOrFalse(employeeBonus, 78, 2))


// Exercício 6
// Método .indexOf() - const findPosition = employeeBonus.indexOf(78)

const callbackIndexOf = (element, current) => {
    if (element === current) {
        return true
    } else {
        return false
    }
}

const findPosition = (element, arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(element, arr[i])) {
            return i
        }
    }
    return -1
}
findPosition(145, employeeBonus, callbackIndexOf)
console.log(findPosition(145, employeeBonus, callbackIndexOf))

// Array inalterado 

console.log(employeeBonus)