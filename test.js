var n=5;
var cc=50;
pnum=(n)=>{
    
    var a=0;
    var num=0;
    while(a<n){
        for(var i=2;i<cc;i++){
            var c=1;
            for(var j=2;j<=i;j++){
                if(i%j==0){
                    c++;
                    console.log(i%j,i,j,c,cc)
                }
                if(c>3){
                    console.log("break")
                    break;
                }
            }
            console.log("out of loop");
            if(c==2){
                a++;
                num=i
                console.log("a",a)
                break;
            }
            
        }
        console.log(a,num,"this")
        
    } 
    // y6qu6mjw    gen835q5  iujin7dp bcive3c2

    
    console.log(a,i)
}
pnum(n)

// pm=(n)=>{
//     var c=1;
//     for(var i=2;i<=n;i++){
//         if(n%i==0){
//             c++
//         }
//     }
//     if(c==2){
//         return 'prime';
//     }
//     else{
//         return 'not prime';
//     }
// }

// console.log(pm(n))