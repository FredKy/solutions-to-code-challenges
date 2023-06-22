/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
String.prototype.hashCode = function() {
    var hash = 0, i, chr, len;
    if (this.length == 0) return hash;
    for (i = 0, len = this.length; i < len; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };
  
  var inputs = readline().split(' ');
  var L = parseInt(inputs[0]);
  var H = parseInt(inputs[1]);
  var ROW = []
  var ROW1 = []
  var ROW2 = []
  var a = []
  
  function getNumByHash(h){
      for (var i=0; i<20; i++){
          if (a[i].hash ==h) {return a[i].num20}
      }
  }
  
  for (var i = 0; i < H; i++) {
      var numeral = readline();
      ROW[i] = numeral.match(new RegExp("(.{1,"+L+"})", "g"));
  }
  
  for (var s=0; s<20; s++){
      var SYM = ''
      for (var h = 0; h < H; h++) {
          SYM += ROW[h][s]
      }
      a[s] = {hash:SYM.hashCode(), num:s, num20:s.toString(20)}
      //printErr(a[s].hash)
  }
  
  
  function readS() {
      var l  =''
      for (var i = 0; i < H; i++) {
          l += readline();
      }
      //printErr(l)
      return getNumByHash(l.hashCode())
      
  }
  /////////////////////////////////
  var S1 = parseInt(readline());
  var op1 = "";
  for (var i=0; i<S1/H; i++){
      op1 += readS();
  }
  
  
  /////////////////////////////////
  var S2 = parseInt(readline());
  var op2 = "";
  for (var i=0; i<S2/H; i++){
      op2 += readS();
  }
  
  var operation = readline();
  
  op1int = parseInt(op1,20);
  op2int = parseInt(op2,20);
  
  res = eval(op1int + operation + op2int)
  
  res20 = res.toString(20);
  
  for (var j=0; j<res20.length; j++) {
  var line = '';
  for (var i=0; i<H; i++){
      var s = res20.charAt(j) // returns 65
      //printErr(s)
      print(ROW[i][parseInt(s,20)])
      
  }
  }
  
  //print(res);
  
  