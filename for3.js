let parillistenSumma = 0;
let parittomienSumma = 0;

for(let i=1; i<=20; i++){
    if(i % 2 === 0) {
       parillistenSumma = parillistenSumma + i;
    }
    else if (i % 2 === 1){
        parittomienSumma = parittomienSumma + i;
    }
   
}
   console.log(parillistenSumma, parittomienSumma)
 if( parillistenSumma > parittomienSumma){
    console.log(parillistenSumma)
    //parilliset on suurempi
 }
    else {
        console.log(parittomienSumma)
    }
        