function prime(num){
    let ans=0
    for(let j=2;j*j<=num;j++){
        
        if(num%j==0){
            ans++
        }
    }
    if(ans>0){
        console.log(num,"not prime")
    }else{
        console.log(num,"prime")
    }
}
prime(2)