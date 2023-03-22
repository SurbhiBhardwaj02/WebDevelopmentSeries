let singleQuotes='heyoo s';
let doubleQuotes="helloo d";
console.log(singleQuotes);
console.log(doubleQuotes);

let char=singleQuotes.charAt(4)
let substr= singleQuotes.substring(2,5);
console.log(substr);
console.log(char);

let asciiCode=singleQuotes.charCodeAt(4);
console.log(asciiCode)

let Strsplit=singleQuotes.split("y");
console.log(Strsplit);
console.log(singleQuotes.split(" "));
console.log(singleQuotes.split(""));

let str=Strsplit.join("$");
console.log(str);

//--> trim removes starting and end spaces
let s="    heyy how are you  "
console.log()

let s1=s.trim();
s1=s1.split(" ");

let joins1=s1.join("+");
console.log(joins1)
