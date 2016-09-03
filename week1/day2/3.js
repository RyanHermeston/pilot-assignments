
module.exports = function prime(n){

  if(n === 0 || n === 1 || n < 0)
  return false;
  if(n === 2 || n === 3 || n === 5)
  return true;
  if(n % 5 === 0 && n % 2 ===0)
  return false;
  if(n % 2 === 0 )
  return false;
  else {
    return prime(n-2);
  }

}
