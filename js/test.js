// function omit(badWords, passage){
//   // if (passage.trim().length === 0) {
//   //   return 0;
//   // }
//   let wordArray = passage.split(" ");
//   wordArray.forEach(function(word) {
//     badWords.forEach(function(badWord) {
//       if (word === badWord) {
//         word = "bad!"
//         return word;
//       } else {
//         return word;
//       }
//       alert(word)
//     })
//   });
//   //const censoredArray = passage.// recombine array into a passage, send back to UI logic for the other stuff
// };



// $(document).ready(function(){
//   $("form#word-counter").submit(function(event){
//     event.preventDefault();
//     badWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
//     passage = $("#text-passage").val();
//     passage = omit(badWords, passage);



//   })
// })