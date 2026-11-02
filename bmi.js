//alipaino <=18.5
//normaali < 25
//ylipaino >= 25



function laskeBMI(paino, pituus) {
    const bmi = paino / (pituus * pituus);
    return bmi;
}

let paino = 100
let pituus = 1.70;
let bmi = laskeBMI(paino, pituus);

console.log(bmi);

function arvioBMI(bmi){
    //alipaino <=18.5
//normaali < 25
//ylipaino >= 25
    if (bmi <= 18.5) {
        return "alipaino";
    
    }
    if (bmi <25) {
        return "normaali";
    } 
    else{
        return "ylipaino"
    }

}

function selvitäBMIrajat (pituus){
    //tulos alinpainon, normaalipaino ja ylipainon rajat
    let alinpainon = 0;
    let ylipaino = 0; 
 for (let paino = 0; paino < 1000; paino++){
    
 }

      console.log(pituus, alinpainon, ylipaino);
}
selvitäBMIrajat(1.85);
