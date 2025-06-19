let string1 = prompt("Please enter string", "Hola");

function capitali(string1){
  return string1.charAt(0).toUpperCase() + string1.slice(1).toLowerCase();
}

function lastLetter(string1){
  return string1.at(-1);
}

console.log(capitali(string1));
console.log(lastLetter(string1));