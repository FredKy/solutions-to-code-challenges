/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 
var Numerotation = {
     
    init : function(L,H,table){
        this.L = L;
        this.H = H;
        this.table = table;
    },
    
    getIntegerValue: function(nbMaya){
        var res = 0;
        var pow = nbMaya.length - 1;
       nbMaya.forEach(function(chiffre){
           for(var i = 0; i < this.table.length; i++){
               if(this.table[i] === chiffre){
                   res += i * Math.pow(20,pow);
               }
           } 
           pow --;
       });
       return res;
       
    },
    
    getMayaRepresentationOfNumber(nb){
       base20 = this.baseConvert(nb,10,20);
           printErr(base20);
       for(var j = 0; j < base20.length; j++){
           var chiffreMaya = this.baseConvert(base20[j],20,10);
           for (var i = 0; i < H; i++) {                
               print(table[chiffreMaya].substring(L*i,L*i + L));
           }
       }
    }, 
    baseConvert : function(number, initial_base, change_base) {
       return parseInt(number + '', initial_base).toString(change_base);
   }
    
}

var inputs = readline().split(' ');
var L = parseInt(inputs[0]);
var H = parseInt(inputs[1]);
var table = [];
for (var i = 0; i < H; i++) {
   var numeral = readline();
   for(var j = 0; j < 20; j ++){
       table[j] = (table[j]||"") +   numeral.substring(L*j,L*j + L);
   }
}
var numerotation = Object.create(Numerotation);
numerotation.init(L,H,table);

var S1 = parseInt(readline());
var nb1 = [];
for(var j = 0; j < S1/H; j++){
   nb1[j] = "";
   for (var i = 0; i < H; i++) {
       nb1[j] =nb1[j] + readline();
   }
}

var S2 = parseInt(readline());
var nb2 = [];
for(var j = 0; j < S2/H; j++){
   nb2[j] = "";
   for (var i = 0; i < H; i++) {
       nb2[j] =nb2[j] + readline();
   }
}
var operation = readline();

var intResult = eval(numerotation.getIntegerValue(nb1) + operation + numerotation.getIntegerValue(nb2));

// Write an action using print()
// To debug: printErr('Debug messages...');

numerotation.getMayaRepresentationOfNumber(intResult);