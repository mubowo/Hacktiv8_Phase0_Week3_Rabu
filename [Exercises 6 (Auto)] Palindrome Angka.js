
function angkaPalindrome(num) {
  // you can only write your code here!

  var bukanPalindrome = true;

  while (bukanPalindrome) {

    num = num + 1
  
  var angkaString = num.toString();
  var angkaPembanding ="";

  for(var i = angkaString.length-1; i >= 0; i--){
     angkaPembanding = angkaPembanding + angkaString[i];
  }
  
  if (angkaString === angkaPembanding) {
    bukanPalindrome = false;
    return num
  }
  }
  
}
    

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
