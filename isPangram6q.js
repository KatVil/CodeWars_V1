function isPangram(string){
    let letters = string.toLowerCase().match(/[a-z]/g);
    // Add those letters to a Set to deduplicate
    let alphabet = [...new Set(letters)]
    // Assert that the length of the variable is 26
    return alphabet.length === 26;
}
//OR
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }
  // OR
  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }
  //OR the best:
  function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  }