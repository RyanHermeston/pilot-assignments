
module.exports = function flatten(array){
var output = array.reduce(function(a, b){
  return a.concat(b);
})
return output;
}
