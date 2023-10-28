

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
  //let books = data
  //console.log(books)
    renderBooks(data);
  
  });
}
  

  //let books = data.map(data => ({ name: value }));
  //console.log(books);
  //});
   // const books = () => {
      //return data.map(data => ({ name: book.title }));
     //};
    // console.log(books);
   //let newArray = data.map(data=> ({name: book. name}));
   //let books = {};
   //for(let i=0; i<newArray.length; i++) {
    //books[i+1] = newArray[i];
   //}
  // return(books);
    //console.log(data.name);
  
   // let books = data.title;
   //console.log(data);
   // return books;
  //});


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
