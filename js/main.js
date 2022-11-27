import userList from './users.js'


const {createApp} = Vue;

createApp({
    data(){     
       return{
        userList: [...userList],
        currentContact: -1,
        selectedUser: "",
        user: {
          name: 'Gimli',
          avatar: 'img/gimli.jpg',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
          }
          ],
        },
        newMessage:{
          date: '10/01/2020 15:50:00',
          message: '',
          status: 'sent'
        },
        text: "",
       }
    },
    methods:{
      beforeMount () {
        this.currentContact = this.usersList[0];
      },
       activeContact (contact, i){
         this.currentContact = i;
         this.selectedUser = contact;
         // alert("ciao" + this.currentContact);
          console.log("ciao " + this.selectedUser.name);
       },
      addNewMessage (){

        this.selectedUser.messages.push({
          date: this.newMessage.date,
          message: this.newMessage.message,
          status: this.newMessage.status,
        }),

        console.log(this.newMessage.message);
        this.newMessage.message = ""; 
        
        setTimeout(() => {
          this.selectedUser.messages.push({
            date: this.newMessage.date,
            message: 'ok',
            status: 'received',
          })
        }, 1000);
      },
    },
}).mount("#app");



