console.log('Hello world'[10])
console.log(''.length)
let stry = 'Tayler'
console.log(stry[stry.length-1])

let isRaining = true
let temperature = 20

temperature = temperature + 2

console.log(temperature)

let celcius = 10;
let fahrenheit = (celcius * 1.8 + 32)

console.log(fahrenheit)

// Conditionals

let subscribed = false
let loggedIn =false

if (subscribed === true) {
    console.log('show the video')
} 
else if (loggedIn === true){
    console.log('please upgrade')
}
else {
    console.log('please log in')
}

// Example two 

let cash = 50
let price = 40
let isStoreOpen = false

if (cash > price && isStoreOpen) {
    console.log(`you paid extra, your change is ${cash - price}`)
}
else if (cash === price) {
    console.log("you paid the exact amount")
}
else {
    console.log(`you still owe ${price - cash}`)
}

let ans = cash > price && isStoreOpen ? "print receipt" : "do not give receipt"
console.log(ans)
// ternary operators
let hot = false

// hot ? console.log("hot") : console.log("not")

// // Loops
// // let count = 1
// // // while (count <= 100) {
// // //     console.log(count)
// // //     count = count + 1
// // // }

// // for (let i = 0; i <= 100; i++) {
// //     console.log(i)
// // }

// // test question

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0){
        if (i % 5 === 0){
            console.log("Frontend Simplified")
        }else {
            console.log("Frontend")
        }
    }else if (i % 5 === 0) {
        console.log("Simplified")
    }else {
        console.log(i)
    }
}

// string print test

testString = "Frontend Simplified"

for (let i = 0; i < testString.length; i++){
    console.log(testString[i])
}

// functions

function welcomePersonToFES(personName) {
    console.log(`Welcome to FES, ${personName}!`)
}

welcomePersonToFES("Tayler");

function fn(num1, num2) {
    return num1 + num2
}


console.log(fn(5, 10))

function tempConvert(cels) {
    return cels * 1.8 + 32
}

console.log(tempConvert(10))

// arrays

let arr = [20, 30, 40, 50, 100]

console.log(arr[0])
console.log(arr[arr.length-1])

arr.push(200)

let newArr = arr.filter((element) => {
    if (element < 50) {
        return true
    }
})

console.log(newArr)

let gradeArr = ['A+', 'A', 'FAIL']
console.log(gradeArr)
let passingGradeArr = gradeArr.filter(element => element != 'FAIL')
console.log(passingGradeArr)

let gradeArr2 = []

for (let i = 0; i < gradeArr.length; i++){
    if (gradeArr[i] != 'FAIL'){
        gradeArr2.push(gradeArr[i])
    }
}
console.log(gradeArr2)

let mapArr = [1, 5, 10, 3]

let newMapArr = mapArr.map(element => element * 100)

console.log(mapArr)
console.log(newMapArr)

// Objects

let users = [
    {
    username: 'Tayler',
    email: 'tayler.westercamp@gmail.com',
    password: 'test123',
    substatus: "VIP",
    discordID: 'taylerW#0001',
    lessonsCompleted: [0, 1]
},
{
    username: 'David',
    email: 'David.westercamp@gmail,com',
    password: 'test1234',
    substatus: "VIP",
    discordID: 'DavidW#0001',
    lessonsCompleted: [0, 1, 2, 3]
}
]

function login(email, password) {
    for (let i = 0; i < users.length; i++){
        if (users[i].email === email){
            console.log([users[i]])
            if (users[i].password === password){
                console.log('Log user in')
            }else {
                console.log('Password is incorrect')
            }
            return;
        }
    }
    console.log("email not registered")
}

login("tayler.westercamp@gmail.com", "test123")

function register(
    username, 
    email, 
    password, 
    substatus, 
    discordID, 
    lessonsCompleted
) {
    let user = {
    username: username,
    email: email,
    password: password,
    substatus: substatus,
    discordID: discordID,
    lessonsCompleted: lessonsCompleted
    }
    users.push(user);
    console.log(email, password)
}

register("zen", 'zen.email', 'zen123', 'VIP', '#zen#0001', [0, 1])

console.log(users)