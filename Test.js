// //Array example
//
// var kaisLikes = ["drawing", "rain", "tea", "birds"];
// console.log(kaisLikes[0]) //first array element
// console.log(kaisLikes.length) //array list legnth
// console.log(kaisLikes[kaisLikes.length - 1]) //last array element
// kaisLikes.push("sushi"); //adds an array element
// console.log(kaisLikes)
// kaisLikes.pop("tea"); //deletes an array element
// console.log(kaisLikes)
//
////////////////////////////////////////////////////////////////////////////////

// //Associative arrays example
//
// var name = [];
//   name[0] = "Amadeus";
//   name[1] = "Salinger";
//   name[2] = "Wolfgang";
// console.log(name.length) //returns 3
// console.log(name[0]) //returns "Amadeus"
//
////////////////////////////////////////////////////////////////////////////////

// //Object example
//
// var kaisInfo = {firstName:"y-nhi", lastName:"Nguyen", age:21};

////////////////////////////////////////////////////////////////////////////////

//Objects in arrays

// colors = {
//   colorsArray: [
//     {
//       color1: "blue",
//       color2: "green",
//       color3: "gray",
//     },
//     {
//       color1: "red",
//       color2: "orange",
//       color3: "white",
//     }
//   ]
// }
//
// console.log(colors.colorsArray[0].color1) //returns blue
// console.log(colors.colorsArray[1].color3) // returns white

////////////////////////////////////////////////////////////////////////////////

//Conditionals: if

// const whatShouldWeEat = 9;
//
// const pickANum = () => {
//   const choice = whatShouldWeEat
//
//   if (choice <= 3) {
//       console.log('fried chicken');
//   } else if (choice >=4 && choice <=7) {
//       console.log('dim sum');
//   } else if (choice >=8 && choice <=10) {
//       console.log('tacos');
//   } else {
//       console.log('lol 1-10 bitch')
//   }
// };
//
// pickANum(); //calls the function

////////////////////////////////////////////////////////////////////////////////

//Conditionals: ?

// let hotOutside = false;
//
// let temp = hotOutside ? 'stay inside' : 'go out';
//
// console.log(temp)

////////////////////////////////////////////////////////////////////////////////

//For loop examples

// for (var i = 0; i < 5; i++) {
//   console.log(i); //loops until 4 vertically
// }
//
// var s = "";
// for (var i = 1; i <8; i++) {
//   s += i + " ";
// }
// console.log(s); //loops until 7 in line

////////////////////////////////////////////////////////////////////////////////

//Array maps example
//map() creates a new array with the results of calling a function every array element
// also calls the provided function once for each element in an array in border
// does not execute the function for array elements w/o values

//////Example 1////////////

// var pets = [
//   {name : "yuki", animal : "cat", age : 2},
//   {name : "yuzu", animal : "bird", age : 4},
//   {name : "yume", animal : "dog", age : 7}
// ];
//
// function getAllPetInfo(item) {
//   var allPetInfo = [item.name,item.animal,item.age].join(", ");
//   return allPetInfo;
// }
//
// console.log(pets.map(getAllPetInfo)) //lists all pet info

//////Example 2////////////

// var numbers = [65, 44, 12, 4];
// var newarray = numbers.map(myFunction)
//
// function myFunction(num) {
//   return num * 10;
// }
//
// console.log(newarray) //lists new list w/ each number *10
////////////////////////////////////////////////////////////////////////////////

//PROMISES (P + tab)

//////Example 1////////////

// let promise = new Promise(function(resolve, reject) {
//   resolve ("done");
//
//   reject (new Error("...")); //ignored
//   setTimeout(() => resolve("..."), 5000); //ignored
// });
//
// promise
// .then((result) => { //runs when the promise is resolved/rejected and recieves the result/error
//   console.log(1, result)
// })
// .catch((error) => { //same thing as .then(null, (error))
//   console.log(2, error);
// });

//////Example 2////////////

// let promise = new Promise(function(resolve, reject) {
//   // setTimeout(() => resolve("done!"), 1000);
//   setTimeout(() => reject(new Error("Error: XXX")), 1000);
// });
//
// // resolve runs the first function in .then
// promise.then(
//   (result) => console.log(result), // shows "done!" after 1 second
//   (error) => console.log(error) // doesn't run
// );

//////Example 3////////////
//
// new Promise ((resolve, reject) => {
//   setTimeout(() => resolve("result"), 2000)
// })
//   .finally(() => console.log("promise ready"))
//   .then((result) => console.log(result)); //handles the result

//////Example 4////////////

new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => console.log("promise ready"))
  .catch((err) => console.log(err));  //handles the error object
