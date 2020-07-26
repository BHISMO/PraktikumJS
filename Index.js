console.log("RPL_TKJ");
console.log("Rekayasa Perangkat Lunak");
console.log("Rekayasa Perangkat Lunak 2");

var globalVar = 100;
function f(){
    var localVar = 200;

    console.log("Memanggil Variabel di dalam fungsi");
    console.log("globalVar: "+globalVar);
    console.log("localVar: "+localVar);
}

f();

console.log("\n Memanggil Variabel di dalam fungsi");
console.log("globalVar: "+globalVar);

for(var i=0;i<3;i++){
    console.log("Nilai i:"+i);
}

console.log("Di luar blok pengulangan, nilai i adalah "+i);

const phi = 3.14;
let r = 10

console.log("Keliling Lingkaran:\n"+(2*phi*r));

var a=9;
console.log(typeof(a));

var b = new Number(9);
console.log(typeof b);
console.log(b.toString());

var desimal = 18;
var biner = 0b1010;
var oktal = 0o25;
var heksa = 0x24

console.log(desimal + "");
console.log(biner + "");
console.log(oktal + "");
console.log(heksa + "");