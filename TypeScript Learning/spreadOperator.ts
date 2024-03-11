let obj = {
    address:{
        name:"kolhapur",
    }
}

function print(a){
    console.log(a);
}
const city= "mumabu"
print({...obj.address, city:"y"}); // this
console.log(obj);
// Original object
// const originalObject = {
//     existingProperty1: 'value1',
//     existingProperty2: 'value2'
//   };
  
//   // New entity to add
//   const newProperty = 'value3';
  
//   // Spread the original object and add the new entity
//   const newObject = {
//     ...originalObject,
//     newProperty
//   };
  
//   console.log(newObject);
  