function triangle(row){
    for (let i=row;i>=1;i--){
        let ans="";
        for (let J=1;J<=i;J++){
            ans+="*";
        }

        console.log(ans)
    }
}
triangle(4)