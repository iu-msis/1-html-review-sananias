const Book = {
    data() {
      return {
        "books":[],
        bookForm:{},
        selectedBook: null
      }
    },
methods: {
// Currency Formatting ------------------------------------------------------------------------------------
prettyDollar(n) {
  const d = new Intl.NumberFormat("en-US").format(n);
    return "$ " + d;
                },
// API to SQL for Books Table ------------------------------------------------------------------------------------
fetchBooksData() {
  fetch('/api/books/index.php')
  .then( response => response.json() )
  .then( (responseJson) => {
  console.log(responseJson);
  this.books = responseJson;
  })
.catch( (err) => {
console.error(err);
    })
 },

// Post New Book from form ------------------------------------------------------------------------------------
postBook(evt) {
  if (this.selectedBook === null) {
      this.postNewBook(evt);
  } else {
      this.postEditBook(evt);
  }
},
postNewBook(evt) { 
  console.log("Create", this.bookForm);

  fetch('api/books/create.php', {
      method:'POST',
      body: JSON.stringify(this.bookForm),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
               }
    })

    .then( response => response.json())
    .then(json => {
    console.log("Returned from post:", json);
    this.books = json;
    // Clear whenever its submitted -------------
    this.resetBookForm();
                 
                   });
              },    
// Edit Book ------------------------------------------------------------------------------------
postEditBook(evt) {

  console.log("Updating", this.bookForm);

  fetch('api/books/update.php', {
      method:'POST',
      body: JSON.stringify(this.bookForm),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
    
      this.books = json;

      // reset the form
      this.resetBookForm();
    });
},
//Delete Book Record ------------------------------------------------------------------------------------
postDeleteBook(o) {
  if (!confirm("Are you sure you want to delete the book"+o.title+"?")) {
    return;
  }
  console.log("Delete", o);

  fetch('api/books/delete.php', {
      method:'POST',
      body: JSON.stringify(o),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      // TODO: test a result was returned!
      this.books = json;

      // reset the form
      this.resetBookForm();
    });
},
selectBookToEdit(o) {
    this.selectedBook = o;
    this.bookForm = Object.assign({}, this.selectedBook);
},
resetBookForm() {
    this.selectedOffer = null;
    this.bookForm = {};
}
              
   
// Closing Methods ------------------------------------------------------------------------------------
 },
// Created ------------------------------------------------------------------------------------
created() {
        this.fetchBooksData();
    }
  }
Vue.createApp(Book).mount('#bookApp');