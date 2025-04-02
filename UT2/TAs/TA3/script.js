function removeFromArray(arreglo ,  item) {
    for(let i=0; i < arreglo.length;  i++){
        if(arreglo[i] == item){
            let removed = arreglo.splice(i,1);
        }
    }
    console.log(arreglo);
}

/*
let unarray = ["enero", "febrero", "marzo", "abril"];
removeFromArray(unarray, "marzo");
*/
