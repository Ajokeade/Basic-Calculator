// var inputAmount=6700;
// var denomination=[1000,500,200,100,10,5];
// if(inputAmount>1000){
//     count=Math.floor( inputAmount/1000);
//     rem=inputAmount %1000;
//     console.log('no of 1000 is '+count);
//     if(rem>=500){
//         count=Math.floor( rem/500);
//         console.log('no of 500 is '+count);
//         rem=rem%500;
//         if(rem>=200){
//             count=Math.floor(rem/200);
//             console.log('no of 200 is '+count);
//             rem=rem%200;
//             if(rem>100){
//                 count=Math.floor(rem/100);
//                 console.log('no of 100'+count);
//                 rem=rem%100; 
                
//             }
//         }
//     }
//     console.log(inputAmount %1000);
// }
function money(){
    debugger
    var inputAmount=6700;
var denomination=[1000,500,200,100,10,5];
switch(inputAmount){   
    case(inputAmount>=1000):
  count=Math.floor(inputAmount/1000);
  console.log(count);
    break;

    case(inputAmount>=500):
    console.log(Math.floor(inputAmount/500));
    break;

    case(inputAmount>=200):
    console.log(Math.floor(inputAmount/200));
    break;

    case(inputAmount>=100):
    console.log(Math.floor(inputAmount/100));
    break;

    case(inputAmount>=50):
    console.log(Math.floor(inputAmount/50));
    break;

    case(inputAmount>=20):
    console.log(Math.floor(inputAmount/20));
    break;

    case(inputAmount>=10):
    console.log(Math.floor(inputAmount/20));
    break;

    case(inputAmount>=5):
    console.log(Math.floor(inputAmount/5));
    break;
}
}


