function replaceArray(array)
{
   if(!array) return [-1]
   if(!array.length) return [-1];
   for(var i = 0; i < array.length; i++){
      if(array[i] === 0){
         console.log(`O valor do indice ${i} já é zero...`);
      } else if(array[i] % 2 === 0){
         console.log(`Substituindo o valor ${array[i]} por 0...`);
         array[i] = 0;
      }
   }
   return array;
}

let array = [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(replaceArray(array));