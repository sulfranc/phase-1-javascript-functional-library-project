
   
const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 }

function myEach(collection, cbFunc) { 
    let newObj = Object.values(collection)
    newObj.forEach(element => {
        cbFunc(element) 
    });
    return collection;
};
const callback1 = (x) => (x * 3) 
function myMap(collection, cbFunc) { 
    let newObj = Object.values(collection) 
    let newCollection = newObj.map(x => callback1(x))
    return newCollection;
};
const testArr = unmodifiedTestArr.slice()
const testObj = Object.assign({}, unmodifiedTestObj)
const callback = (acc, val, collection) => (acc + (val * 3))

function myReduce(collection, cbFunc, acc) {
    let newObj = Object.values(collection) 
    if (acc == null) {
        let value = newObj.reduce(cbFunc)
        console.log(value)
        return value;
    } else {
        let value = newObj.reduce(cbFunc, acc)
        console.log(value)
        return value;
    }
}
function findCBGenerator(target) {
    return (function (currEl) { return target === currEl })
}
function myFind(collection, predicate) {
    let newObj = Object.values(collection)
    let newValue = newObj.find(x => predicate(x))
    return newValue
}
function excluder(currEl) {
    return (currEl > 10)
}
function myFilter(collection, predicate) {
    let newArr = []
    let newObj = Object.values(collection)

    newObj.filter(x => {
        if (predicate(x)) {
            newArr.push(x)
        }
    })
    return newArr
}
function mySize(collection) {
    let newObj = Object.values(collection)
    let value = newObj.length;
    console.log(value)
    return value
}
function myFirst(array, n) {
    if (array == null) {
        return void 0;
    } else if (n == null) {
        return array[0];
    } else if (n < 0) {
        return [];
    }
    return array.slice(0, n)
}
function myLast(array, n) {
    if (array == null) {
        return void 0;
    } else if (n == null) {
        return array[array.length - 1];
    } else if (n < 0) {
        return [];
    }
    return array.slice(-n)
}
function myKeys(object) {
    let array = Object.keys(object)
    console.log(array)
    return array
}
function myValues(object) {
    let array = Object.values(object)
    console.log(array)
    return array
}