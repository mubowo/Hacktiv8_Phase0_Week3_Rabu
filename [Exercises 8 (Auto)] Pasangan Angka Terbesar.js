
function pasanganTerbesar(num) {
  // you can only write your code here!
    
    var strNum = num.toString();
    var strPair = [];
    
    
    for (var i = 0; i < strNum.length-1; i++){
              
            strPair.push(strNum[i]+strNum[i+1]);
             
        }      
   
    var maxValue = 0;
    
    for (var j = 0; j < strPair.length; j++ )
    {
        if (maxValue < strPair[j]){
                maxValue = strPair[j];
            } 
    } 
    return parseInt(maxValue);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
