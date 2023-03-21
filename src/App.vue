<template>
  <v-app>
    <v-main>
      <pageHeader />
      <router-view />
      <v-snackbar
          v-model="snackbar"
          class="notificationAlert"
        >
          <router-link to="/NotificationPage">
            <div class="title">
              {{ this.toastTitle }}
            </div>
            <div class="body">
              {{ this.toastBody }}
            </div>
          </router-link>
        </v-snackbar>
      <pageFooter/>
    </v-main>
  </v-app>
</template>

<script>
import "./assets/css/style.css";
import pageHeader from "./components/Shared/pageHeader.vue";
import pageFooter from "./components/Shared/pageFooter.vue";

import {messaging} from './firebase'
import {getToken , onMessage }  from "firebase/messaging"

export default {
  name: "App",
  components: {
    pageHeader,
    pageFooter
  },

  data: () => ({
    return : {
      snackbar : false
    }
  }),
  methods:{
    async requestPermission(){
      const permission = await Notification.requestPermission()
      if( permission === "granted" ){

        // console.log('granted')
        // Generate token
        // we get the token from project setting => cloud messaging => generateKey
        getToken( messaging , {usePublicVapidKey:"BEsAV6wTLeQAm392UkC7w0algA7iDPN0jczpHEi1J7JUBhyx4aUHBeGV6tusRtyBK3wSEblWfdeoifiWzU7eXko"} )
        // {vapidKey:"BFpjV9Ma8fIm3fnaCxRZMuQM_iPkZcyUpmje05C7sG-S7K7MNcep0DLwwim9mKV0w6hyLKaPtyHQDiXlJBol64w"}
        .then((currentToken) => {

          if (currentToken) {
            localStorage.setItem('FCMToken', currentToken.toString());
            console.log(currentToken.toString())
          } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
            }
          }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });


        //To handle foreground messages
        onMessage(messaging, (message) => {
          this.notiCount()
          this.toastTitle = message.notification.title
          this.toastBody = message.notification.body
          this.snackbar = true

          
           
        })



      }else if( permission === "denied" ){

          console.log('you denied')

      }
    }
  },
  created(){
    this.requestPermission();
  },

  // beforeCreate() {

  //   if (sessionStorage.getItem("lang")) {
  //     this.$i18n.locale = sessionStorage.getItem("lang");
  //   }
  // },

  mounted() {
      // document.querySelector("html").lang = sessionStorage.getItem("lang")
  }

};
</script>
