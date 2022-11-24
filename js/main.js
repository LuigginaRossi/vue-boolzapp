import userList from './users.js'


const {createApp} = Vue;

createApp({
    data(){     
       return{
        userList:[...userList]
       }
    },
    methods:{
      selectContact(index){
        this.userList = index;
      }
    }
}).mount("#app");



