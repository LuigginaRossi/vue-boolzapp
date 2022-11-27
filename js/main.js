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
       }
    },
    methods:{
       activeContact (contact, i){
         this.currentContact = i;
         this.selectedUser = contact;
         // alert("ciao" + this.currentContact);
          console.log("ciao" + this.selectedUser.messages[0].message);
       },
      beforeMount () {
        this.currentContact = this.usersList[0];
      }
    },
}).mount("#app");



