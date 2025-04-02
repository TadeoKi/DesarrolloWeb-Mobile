function leapYears(año){
    if(año % 4 == 0){
        console.log("true")
        return true
    }
    else if((año % 100 == 0) && (año % 400 == 0)){
        console.log("true")
        return true
    }
    else{
        console.log("false")
        return false
    }

}
/*
leapYears(2100);
leapYears(2024);
leapYears(2025);
*/