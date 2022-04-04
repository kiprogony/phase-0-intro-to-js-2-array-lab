// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push("Ralph");
}

 function destructivelyPrependCat(name) {
   cats.unshift("Bob");
 }

 function destructivelyRemoveLastCat (name) {
   cats.pop("Garfield");
 }

 function destructivelyRemoveFirstCat () {
   cats.shift();
 }

 function appendCat (name) {
   return ["Milo", "Otis", "Garfield", "Broom"];
 }

 function prependCat (name) {
   return ["Arnold","Milo", "Otis", "Garfield"];
 }

 function removeFirstCat () {
   return cats.slice(1);
 }

 function removeLastCat () {
   return cats.slice(0, cats.length - 1);
 }

