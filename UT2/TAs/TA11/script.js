function duplicates(nums){
    var numerosunicos =[];
    var numerosrepetidos =[];
    for(let i=0; i<nums.length; i++){
        if(numerosunicos.includes(nums[i])){
            numerosrepetidos.push(nums[i]);
        } 
        else{
            numerosunicos.push(nums[i]);  
        }
    }
    console.log(numerosunicos);
    return numerosunicos;
}

var nums =[1, 2, 2, 3, 4, 4, 4, 5];
duplicates(nums);
