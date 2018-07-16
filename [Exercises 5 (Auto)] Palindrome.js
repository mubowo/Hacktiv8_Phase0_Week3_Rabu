


function palindrome(kata) {
    // you can only write your code here
    
    var internalKata = kata;
    var splitLetter = "";
    var reverseLetter = "";
    var joinLetter = "";

    for (var i = internalKata.length-1; i >= 0; i--){
        
        reverseLetter = reverseLetter + internalKata[i];
        
    }
      
    if (reverseLetter === internalKata){
        return true;
    } else {
        return false;
    }
        
    
}



// Test Cases
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // true
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); //true
console.log(palindrome('mister')); // false
