const Book = {
    data() {
      return {
        books: [],
        bookForm: {}
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
            fetch('/api/books/')
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
postNewOffer(evt) { 
  console.log("Posting!", this.bookForm);

  fetch('api/books/create.php', {
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
      
      this.bookForm = {};
    });
}
   
// Closing Methods ------------------------------------------------------------------------------------
              },
// Created ------------------------------------------------------------------------------------

    created() {
        this.fetchBooksData();
    }
  }
Vue.createApp(Book).mount('#bookApp');