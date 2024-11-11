
function fact(n){
    if(n<0)
        return ;
    let ans=1;
    for(let i=1;i<=n;i++){
        ans*=i    
    }
    return ans;   
}
let num=5;
console.log(fact(num))

