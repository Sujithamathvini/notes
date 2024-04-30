// example 1
const p1 = new Promise((resolve,reject) => {
    const flag = true
    if(flag){
        resolve({username : "suji", password : "123"})
    }
    else{
        reject("ERROR : Something went wrong !!")
    }
})
p1.then((data)=>{
    console.log(data.username);
})
p1.catch((data)=>{
    console.log(data);
})

// example 2 (chaining)
const p2 = new Promise((resolve,reject) => {
    const flag = true
    if(flag){
        resolve({username : "suji", password : "123"})
    }
    else{
        reject("ERROR : Something went wrong !!")
    }
})
p2.then((data)=>{
    console.log(data.username)
    return data.username
}).then((data) => {           // we can return value from one '.then' to its following '.then'
    console.log(data);
})
p2.catch((data)=>{
    console.log(data)
})

// example 3
var pr1 = new Promise((resolve,reject)=>{
    return resolve("go home,")
})

var pr2 = pr1.then((data)=>{
    console.log(data);                  // go home,
    return new Promise((resolve,reject)=>{
        return resolve("wash yourself,")
    })
})

var  pr3 = pr2.then((data)=>{
    console.log(data);                  // go home, wash yourself
    return new Promise((resolve,reject)=>{
        return resolve("now eat.")
    })
})

pr3.then((data)=>{
    console.log(data);                  // go home, wash yourself, now eat.
})