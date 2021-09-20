const Intro = {
    data() {
        return {
            "person": {},
        }
    },

computed: {
    prettyBirthday(){
        return dayjs(this.person.dob.date)
        .format('DD/MM/YYYY')
    }

},    
created () {
    
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then( (responseJson) =>{console.log(responseJson);
    this.person = responseJson.results[0];
  
   
    })

 .catch( (err) => {
     console.error(err);
    })

}//end created

}//end Offer config

Vue.createApp(Intro).mount('#introApp');

