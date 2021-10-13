const Book = {
    data() {
      return {
        "books": [],
      }
    },
  

    methods: {

      prettyDollar(n) {
        const d = new Intl.NumberFormat("en-US").format(n);
        return "$ " + d;
    },

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
    },
    created() {
        this.fetchBooksData();
    }
  
  }
Vue.createApp(Book).mount('#bookApp');