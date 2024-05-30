function countDate() {
    let Data = document.getElementById("premDate").Value;

    let dateN = new Date(Data);
    let njour = dateN.getDate();
    let nmois = dateN.getMonth();
    let nannee = dateN.getFullYear();

    let DataN = document.getElementById("deuDate").Value;

    let dateC = new Date(DataN);
    let cjour = dateC.getDate() - njour;
    let cmois = dateC.getMonth() - nmois;
    let cannee = dateC.getMonth() - nannee;

    if (cannee < 0)
        console.log("date invalide");
    else if (cmois>0)
        console.log(cannee);
    else if (cmois === 0 && cjour >= 0)
        console.log(cannee);
    else{
        cannee = cannee - 1 ;
        if (cmois<=0)
            if (cjour >= 0)
                cmois = 12 + cmois;
            else cmois = 11 + cmois;
    }

    if (cjour < 0){
        cjour = 30 - cjour;
    }

    if (cannee < 0)
        






}