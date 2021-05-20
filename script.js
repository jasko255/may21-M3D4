window.onload = function(){
fetch('https://striveschool-api.herokuapp.com/books')
.then(response =>   response.json())
.then(books => {console.log('what it is',books)
const parent = document.getElementById('cart')
console.log('title',books[1].title);


for(let i=0; i<books.length; i++){
 let kid =`<div class="card col-12 col-md-3 bg-dark text-white" id=${books[i].asin} style="width: 13rem;">
<img src="${books[i].img}" class="card-img-top img-fluid" height="100px">
<div class="card-body">
  <h5 class="card-title">${books[i].title}</h5>
  <p class="card-text">${books[i].price} $</p>
  <button class="btn btn-primary">Add to cart</button>
</div>
</div>`
parent.innerHTML += kid
}
})}

// 3) When the button is pressed, change the style of the item and add its data to another list.
//              That's going to be the Cart's list. Display it somewhere.
//             4) Allow the user to delete items from the cart's list
//             5) Add a "Skip" or "Ignore" button to each book in the page



function hmm(e) {
    if(e.target !== e.currentTarget){
        let clickedItem = e.target.id
        allert('hello' + clickedItem)
    }
   
}

const parent = document.getElementById('cart')
parent.addEventListener('click', hmm, false )
// function hide(e){
//     e.currentTarget.style.visibility = 'hidden';
//     console.log(e.currentTarget);
 
//   }

//   hide()
  
//   var ps = document.getElementsByTagName('p');
  
//   for(var i = 0; i < ps.length; i++){
//     // Console: print the clicked <p> element
//     ps[i].addEventListener('click', hide, false);
//   }
//   // Console: print <body>
//   document.body.addEventListener('click', hide, false);






// parent.innerHTML = books.map((book) => {
//     `<div class="card" style="width: 18rem;">
//     <img src="${book.img}" class="card-img-top img-fluid" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${book.title}</h5>
//       <p class="card-text">${book.price}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>`
  

// })


