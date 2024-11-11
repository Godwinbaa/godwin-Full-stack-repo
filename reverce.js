function reverse(num){
    let ans=0;
    let str=num
    while(str>0){
        ans=ans*10+(str%10);
        str=Math.floor(str/10);

    }
    return ans

}
let add=5664
console.log(reverse(add));
