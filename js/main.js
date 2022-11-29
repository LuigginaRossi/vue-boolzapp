import userList from './users.js'


const {createApp} = Vue;

createApp({
    data(){     
       return{
        dt: luxon.DateTime,
        userList,
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
        searchContact: "",
        newMessage:{
          date: '10/01/2020 15:50:00',
          message: '',
          status: 'sent'
        },
        text: "",
        bg: "",
       }
    },
    methods:{   
       activeContact (contact, i){
         this.currentContact = i;
         this.selectedUser = contact;
         // alert("ciao" + this.currentContact);
          console.log("ciao " + this.selectedUser.name);
          this.bg = this.selectedUser.bg;
       },
      addNewMessage (){
        this.selectedUser.messages.push({
          date: this.dt.now().toFormat("HH:mm"),
          message: this.newMessage.message,
          status: this.newMessage.status,
        }),

        console.log(this.newMessage.message);
        this.newMessage.message = ""; 
        
        setTimeout(() => {
          const lastAccessEl = document.querySelector(".last-access");
          console.log(lastAccessEl);
          lastAccessEl.innerHTML = `Online       <small>Sta scrivendo...</small> `;
          this.selectedUser.messages.push({
            date:  this.dt.now().toFormat("HH:mm"),
            message: 'ok',
            status: 'received',
          })
              setTimeout(() =>{
                lastAccessEl.innerHTML = `Offline: <small>${this.dt.now().toFormat("HH:mm")} </small>`;
              },1500);
          
        }, 1000);
      }, 
      deleteMessage(i){
       this.selectedUser.messages.splice(i, 1);
       console.log(i)
      },
      infoMessage(i){
        alert("Ultimo messaggio: "+ this.selectedUser.messages[i].date);
      },

    },
     beforeMount (){
       console.log(userList)
       this.selectedUser = this.userList[0];
    
     }, 
    computed:{
      filterName(){
        return this.userList.filter(selectedUser =>{
          return selectedUser.name.toLowerCase().includes(this.searchContact.toLowerCase());
        })
      },
    }
}).mount("#app");



