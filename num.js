function triangle(row){
    for (let i=1;i<=row;i++){
        let ans="";
        for (let J=1;J<=row-i;J++){
            ans+=" ";
        }
        for (let J=1;J<=i;J++){
            ans+=J;
        }
        for (let J=i-1;J>=1;J--){
            ans+=J;
        }

        console.log(ans)
    }
}
triangle(5)