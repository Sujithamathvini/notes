const p1 = new Promise((resolve,reject) => {
    const flag = true
    if(flag){
        resolve({username : "suji", password : "123"})
    }
    else{
        reject("ERROR : Something went wrong !!")
    }
})
async function abcd(){
    try{
        const response = await p1
        console.log(response)
    }
    catch(err){
        console.log("something went wrong")
        console.log(err)
    }
}
abcd()