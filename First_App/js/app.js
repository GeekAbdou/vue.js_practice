const app = Vue.createApp({

    
    data(){
        return {
            picture: 'https://randomuser.me/api/portraits/men/78.jpg',
            gender: 'male',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@document.com',
            country: 'Egypt',
            city: 'Cairo',
            phone: '+20123456789',   
        }
    },

    methods: {
        async getUser(){
            const resultsSon = await fetch('https://randomuser.me/api/')
            const {results} = await resultsSon.json()

            this.picture = results[0].picture.large
            this.gender = results[0].gender
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.country = results[0].location.city
            this.city = results[0].location.state
            this.phone = results[0].phone
            
        },
    },

})

app.mount('#app')