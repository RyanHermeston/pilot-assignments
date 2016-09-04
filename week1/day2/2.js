
module.exports = function prime(n){
	if (n < 2)
		return false;
	if(n === 2 || n === 3)
		return true;
	if(n % 2 === 0)
		return false;
	for(var i = 3; i<Math.sqrt(n)+1;i+=2){
		if(n % i === 0){
			return false;
		}
	}
	return true;


}
