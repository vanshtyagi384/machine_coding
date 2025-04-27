let arr = [1,2,3,4,5,6,7,8,9,10];


//console.log(arr[-1]);


const user ={
    name: "hitesh",
    age : 30,
    password : "123"
}

const proxyUser = new Proxy(user, {
    get(target,prop){
        if(prop ==='password'){
            throw new Error('Access Denied')
        }
        
        return target[prop]
    },
    set(target,prop,user){}
});
console.log(proxyUser.password);



