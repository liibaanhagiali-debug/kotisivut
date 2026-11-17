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
    
    let alinpaino = 0;
    let ylipaino = 0; 
    for (let paino = 0; ; paino++){
        let bmi = laskeBMI(paino, pituus)
        let arvio = arvioBMI(bmi)
        if (arvio === "alipaino"){
            alinpaino = paino
        }
        else if (arvio === "ylipaino"){
            ylipaino = paino
            break;
        }

    }


      console.log(pituus, alinpaino, ylipaino);
}
selvitäBMIrajat(1.85);
selvitäBMIrajat(1.20);
selvitäBMIrajat(2.5);


