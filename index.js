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

const getLetter = (str) => {
    let max = 0;
    let maxNum = '';
 str = str.split(' ').join('')
 str.split('').join()
 
      

     str.split('').forEach(function(char){
       console.log(char)
       console.log(str.split(char).length-1)
      //  console.log(max)
       if(str.split(char).length > max && str.split() !== ' ') {
           max = str.split(char).length;
           maxNum = char;
           
       }
         
     });
     console.log(maxNum)
     console.log(max)
     return `${maxNum} and count is ${max-1}`;
     
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

