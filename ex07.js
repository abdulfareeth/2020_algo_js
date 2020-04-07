const prenoms=["Thomas","Sarah","Alexandre","Alexandre","Melodie","Jonathan","Laure"];
for(i = 0; i < prenoms.length; i++){
    for(j =0; j < prenoms.length; j++){
        if(prenoms[i] == prenoms[j] && i!=j){
            prenoms.splice(i,1);
//La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments 
        }
    }
}
var prenoms2 = prenoms.join(',');
console.log(prenoms2);




/* const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.join());
// expected output: "10,20,30,40,50"

console.log(uint8.join(''));
// expected output: "1020304050"

console.log(uint8.join('-'));
// expected output: "10-20-30-40-50"*/