function div(n){
    let ans=[0,1]
    for(let i=2;i<n;i++){
        ans.push(ans[i-1]+ans[i-2]);

    }
    return ans.slice(0,n);
}
console.log(div(5))