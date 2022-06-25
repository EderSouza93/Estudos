// o que são vetores ou arrays 

//como declarar um array
/* let array = ['string', 1, true];
console.log(array); */

//pode guardar vários tipos de dados 
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
/* console.log(array[6]); */

//forEach - itera um array
/* array.forEach(function(item, index){console.log(item, index)}); */

//Push - add item no final do array
 /* array.push([]);
console.log(array); */ 

//Pop - remove item no final do array
/* array.pop();
console.log(array); */

//Shift - remove item no início do array
 /* array.shift();
console.log(array); */

//Unshift - add item no início do array
 /*array.unshift('novo item no inicio');
console.log(array); */

//indexOf - retorna o índice de um valor
/*console.log(array.indexOf(true));*/ 

//splice - remove ou substitui um item pelo índice;
/* array.splice(0, 3);
console.log(array); */

//slice - retorna uma parte de uma array existente;
/* let novoArray = array.slice(0, 3);
console.log(novoArray); */

//Objetos 
let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};

//acessando as propriedades do objeto 
/* console.log(object); */
//acessando somente uma propriedade
/* console.log(object.objectInterno); */

//desestruturação do objeto
/* var string = object.string;
console.log(string);*/

/* var arrayInterno = object.array;
console.log(arrayInterno); */

var{ string, boolean, objectInterno} = object;
console.log(string, boolean,  objectInterno);



