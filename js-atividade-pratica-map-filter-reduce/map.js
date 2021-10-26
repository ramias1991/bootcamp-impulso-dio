// Map com this

const maca = {
   value: 2,
};

const laranja = {
   value: 3,
};

function mapComThis(arr, thisArg) {
   return arr.map(function (item) {
      return item * this.value;
   }, thisArg);
}

const nums = [1, 5, 9, 8];

console.log('this -> maçã: ', mapComThis(nums, maca));
console.log('this -> laranja: ', mapComThis(nums, laranja));

// Map sem this

function mapComThis(arr){
   return arr.map(function(item) {
      return item * 2;
   });
}

const nums2 = [3,5,6,9];

console.log('map sem this: ', mapComThis(nums2));