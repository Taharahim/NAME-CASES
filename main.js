"use strict";
// in lowercase
let person_name = "HELLO ERIC";
console.log("lowercase:", person_name.toLowerCase());
//  in uppercase
let person_name1 = "hello eric how are you";
console.log("uppercase:", person_name1.toUpperCase());
// in titlecase
console.log("titlecase:", person_name1.replace(/\b\w/g, (char) => (char).toUpperCase()));
