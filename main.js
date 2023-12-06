//Recursive Case
function eggDrop(n, f = 1) {
    if (n <= 0) {
      return f - 1;
    } else if (n => 1) {
      return eggDrop(n - f, ++f);
    }
}
  
console.log(eggDrop(100));
module.exports = eggDrop;