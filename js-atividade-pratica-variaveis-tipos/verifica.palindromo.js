/*function verificaPalindromo(string) 
{
   if(!string) return;
   
   string = string.split(' ').join('');
   let stringReverse = string.split('').reverse();
   
   return (string == stringReverse.join('')) ? 'É palíndromo' : 'Não é palíndromo';
   
}*/

function verificaPalindromo(string) 
{
   if(!string) return;
   string = string.split(' ').join('');
   
   for(let i = 0; i < string.length / 2; i++){
      if(string[i] !== string[string.length - 1 - i]){
         return false;
      }
   }

   return true;
   
}

console.log(verificaPalindromo("aroga roma me tem amor agora"));