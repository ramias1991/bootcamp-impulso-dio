function getAdmin(map) {
   let admins = [];
   for ([key, value] of map){
      if(value === 'Admin'){
         admins.push(key);
      }
   }
   return admins;
}


const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Ramias', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'User');

console.log(getAdmin(usuarios));