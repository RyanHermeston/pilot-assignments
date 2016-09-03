
module.exports = function toStringArray(arr) {

var tar = arr.map(function(arr){
  return arr + '';
})
return tar;
;
}
