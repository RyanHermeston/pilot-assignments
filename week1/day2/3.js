
module.exports = function prime(n){

  if(n <= 1 )
    return false;
  if( n === 2 || n === 3 )
    return true;
  if(n % 2 === 0 )
    return false;
  else {
    return prime(n-2);
  }

}
