var console = require('./lib/consolelog.js');

module.exports = function chessboard() {
  var str = "";
var size =8;
for(var i =0;i<size;i++){

  for(var j = 0;j<size/2;j++){
    str+='#'+" ";
  }str+="\n";
  if(i%2==0)
    str+=" ";
}
console.log(str);

}
