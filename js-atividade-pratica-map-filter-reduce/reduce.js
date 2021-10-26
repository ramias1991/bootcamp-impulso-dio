function somaNumer(arr){
   return arr.reduce(function(prev, current){
      return prev + current;
   });
}

const arr = [1,2,3,4];

console.log(somaNumer(arr));

const lista = [
   {
      name: 'sabao em po',
      preco: 30
   },
   {
      name: 'cereal',
      preco: 12
   }, 
   {
      name: 'toalha',
      preco: 30
   }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
   return lista.reduce(function(prev, current){
      return prev - current.preco;
   }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));