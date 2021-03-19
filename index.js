const createHTML = (value) => `
<div class='card container bg-info ' >

<div class="card-body">
  <p class="card-text fw-bold text-center fs-3">The most used letter is : ${value}</p>
</div>

</div>               
`

let sentence = document.querySelector('#sentence');
const favourite = document.querySelector('#favourite');
const button1= document.querySelector('#submit')

// const getLetter = (string) => {
//     let max = 0;
//     let value;
//      let maxChar = '';
//      let letters = [];
//      let str = string.split(" ")
//      console.log(str.length)
//      for(let i=0; i<str.length; i++) {
        
//          value = str[i].split('')
//          letters.push(value)
     
//     }
//     console.log(letters)
//     letters.forEach(function(char){
//         if(string.split(char).length > max) {
//             max = string.split(char).length;
//             maxChar = char;
//          }
//       });
//       return maxChar;
// }
const getLetter = (str) => {
    let max = 0;
    let maxNum = '';
     str.split('').forEach(function(char){
       if(str.split(char).length > max) {
           max = str.split(char).length;
           maxNum = char;
        }
     });
     return maxNum;
   };

submit.addEventListener('click', (event) => {
    event.preventDefault();
   const value = sentence.value
   const characters = getLetter(value);
   console.log(characters)
   const cardHtml = createHTML(characters)
   favourite.innerHTML = cardHtml
   sentence.value=''
  })

