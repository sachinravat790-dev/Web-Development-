// var age=25; // variable decleration


// if(true){
// console.log(age);//25
// }

function solve(){
    var age =25;
    console.log(age);

}
 //console.log(age);// error dega kyuki function  jo hotaa ha function block ke andhar ke acces karta ha 
solve();


// let --->  block scope hota ha block ke andhar hi access karta ha 
let a=10;{
 console.log(a);
}
 //console.log(); error dega 


//  let a=19; not allowed re declear
//  let a=30;

// let v=84;
//  v=24;  //  ye sahi ha 
//  v="sachin";
//  v=true;
//   console.log(v);


const b = 38;
 console.log(b);

 //const b=20;    // not allowed reassign and redeclear
 //console.log(b);


//  ============data type=========
// number
let marks=20;
marks=309.57
console.log(marks);

//boolean
marks=true;
console.log(marks);

//string
let name="sachin";
console.log(name);

// undefined
var c;     // variable declear kar diye but value assign nhi kiye
console.log(c);

// null
 marks=null
console.log(marks);

// bigint
marks=234189348593407690547852394238754345895739348539789475433974439573494734
console.log(marks);


//check data type

marks=false;
console.log(typeof(marks));

marks="sachin";
console.log(typeof(marks));

marks=234509;
console.log(typeof(marks));


