function compareObjects(obj1, obj2) {
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }

      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!compareArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  for (let key in obj2) {
    if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

const obj1 = {name: 'nick', age: 30};
const obj2 = {name: 'nick', age: 30};
console.log(compareObjects(obj1, obj2));

const obj3 = {name: 'veronika', age: 25};
console.log(compareObjects(obj1, obj3));
