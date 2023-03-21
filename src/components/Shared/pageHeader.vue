<template>
  <!-- Start Navbar -->
  <nav class="navbar-m" @click="hideForce($event)">
    <div class="container">
      <div class="nav-content">
        <router-link to="/" class="logo">
          <img :src="'https://nawaaaf.com/public'+nav_and_footer_data.logo" alt="" />
        </router-link>

        <div class="links-container">

          <form class="search nav-search position-relative" ref="navSearch">
              <input type="text" :placeholder="$t('nav.search')" class="search-input" v-model="searchBar" @input="searchAds()"/>
              <button type="button" class="search-btn">
                  <!-- <i class="fa-solid fa-sliders"></i> -->
                  <i class="fa-solid fa-magnifying-glass"></i>
              </button>

              <div class="filteredSearch" v-if="showList">
                  <ul v-if="searchItems.length>0">
                      <li v-for="ad in searchItems" :key="ad.id" class="adName" @click="goToAd(ad.id, ad.name)"> {{ ad.name }} </li>
                  </ul>
                  <ul v-else>
                      <li>لا توجد إعلانات</li>
                  </ul>
              </div>
          </form>

          <ul class="links" ref="ulBar">
            <router-link to="/" class="logo d-lg-none">
              <img :src="logo" alt="" />
            </router-link>

            <li>
              <router-link
                to="/"
                class="links-a"
                :class="{ active: $route.path === '/' }"
                >
                  {{ $t('nav.main') }}  
              </router-link
              >
            </li>
            <li>
              <router-link
                to="/depatments"
                class="links-a"
                :class="{ active: $route.path === '/depatments' }"
                >                  
                  {{ $t('nav.cats') }}  
              </router-link
              >
            </li>
            <li>
              <router-link
                to="/favView"
                class="links-a"
                :class="{ active: $route.path === '/favView' }"
                @click="preventLogin()"
                >
                  {{ $t('nav.favs') }}    
              </router-link
              >
            </li>
            <li>
              <router-link
                to="/contactView"
                class="links-a"
                :class="{ active: $route.path === '/contactView' }"
                >
                  {{ $t('nav.contact') }}    
              </router-link
              >
            </li>
          </ul>

          <div class="mobile">
            <div class="search-mobile" ref="searchMobile">
              <div class="search-icons" @click="toggleSearch()">
                <div class="search-i">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="search-i search-close">
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>

            <span class="coll-icon" @click="toggleBar()" ref="toggleIcon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>

        <div class="navbar-icons">


          <div class="icons" v-if="loggedIn == 'true'">
            <div class="dropdown-m-container">
              <img
                :src="userImg"
                class="nav-i show-drop"
                data-drop="user"
                @click="toggleDropdown($event)"
                alt=""
              />
              <div
                class="user-drop dropdown-m dropdown-active"
                data-drop="user"
                :class="{ 'active-drop': showYes }"
              >
                <router-link @click="preventLogin()" to="/editProfileView" class="drop-link"
                  > {{ $t('nav.profile') }} </router-link
                >
                <router-link @click="preventLogin()" to="/ratingView" class="drop-link"
                  >{{ $t('nav.rates') }}</router-link
                >
                <router-link @click="preventLogin()" to="/advertisementsView" class="drop-link"
                  >{{ $t('nav.ads') }}</router-link
                >
                <router-link
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#alertModal"
                  class="drop-link"
                  v-if="hideLogOut"
                  > {{ $t('nav.logout') }} </router-link
                >
                <router-link
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#alert2Modal"
                  class="drop-link"
                  v-if="hideLogOut"
                  >{{ $t('nav.delete') }}</router-link
                >
              </div>
            </div>

            <div class="dropdown-m-container">
              <img
                :src="notiImg"
                class="nav-i show-drop"
                data-drop="not"
                @click="toggleDropdown2($event)"
                alt=""
              />

              <!-- notification -->
              <span class="count_notification"> {{ notyCount }} </span>

              <div
                class="not-drop dropdown-m dropdown-active"
                data-drop="not"
                :class="{ 'active-drop': showYes2 }"
              >
                <!-- notification list  -->
                <section v-if="slicedNotification.length>0" >
                  <div>
                    <router-link
                      to="/"
                      class="drop-text"
                      v-for="noti in slicedNotification"
                      :key="noti.id"
                    >
                      {{ noti.body }}
                    </router-link
                    >
                  </div>
                  <router-link to="/notificationsView" class="more-anchor"> {{ $t('common.more') }} </router-link>

                </section>
                <section v-else class="d-flex justify-content-center">
                  <span class="text-center"> لا توجد اشعارات </span>
                </section>
              </div>
            </div>


            <!-- <button class="">AR</button> -->
            <!-- <button @click="changeLocale" class="lang-m-spe" >{{$i18n.locale == 'ar'?'En':'AR'}}</button> -->

          </div>
          
          <a
            href="#"
            class="login-anchor"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            v-else
            >     {{ $t('nav.login') }}    
            </a>

          <button
            class="main-btn up"
           
          >
            <router-link to="/uploadAds"  @click="preventLogin()">   {{ $t('nav.upload') }}     </router-link>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
  <!--logout modal-->
  <logOut />
  <removeAccount />
  <doneRemove />
  <regiesterComponent />
  <activationCode />
  <loginComponent />
</template>

<script>
 import removeAccount from "../Shared/removeAccount.vue";
 import doneRemove from "../Shared/doneRemove.vue";
 import logOut from "../Shared/logOut.vue";
 import regiesterComponent from "../auth/regiesterComponent.vue";
 import activationCode from "../auth/activationCode.vue";
 import loginComponent from "../auth/loginComponent.vue";

 import axios from 'axios'
export default {
 
  data() {
    return {
      searchBar : null,
      searchItems : [],
      showList : false,
      showYes: false,
      showYes2: false,
      logo: require("../../assets/imgs/nawaf.png"),
      filterImg: require("../../assets/imgs/icons8-slider-60.png"),
      userImg: require("../../assets/imgs/user.png"),
      notiImg: require("../../assets/imgs/bell.png"),
      loggedIn : null,
  
      notifications: [],
      slicedNotification : [],
      nav_and_footer_data : {},
      notyCount : 0,
      hideLogOut : true
    };
  },
  methods: {

    preventLogin(){
      if( localStorage.getItem('IsLoggedIn') == "false"|| !localStorage.getItem('IsLoggedIn') ){
          this.$swal({
              icon: 'error',
              title: 'قم بتسجيل الدخول اولا',
              timer: 3000,
              showConfirmButton: false,

          });
      }

    },

    

    goToAd(id, name){
      this.$router.push(`/catogryDetails/${id}`);
      this.searchBar = name
      this.showList = false
    },
    toggleBar() {
      // SideBar
      const showSideBar = this.$refs.toggleIcon;
      const SideBar = this.$refs.ulBar;

      SideBar.classList.toggle("active");
      showSideBar.classList.toggle("active");

      // Show And Hide Search Navbar
    },
    // search 
    async searchAds(){
        await axios.get(`search-advertisements?name=${this.searchBar}`)
        .then( (res)=>{
            if( res.data.key == "success" ){
                this.showList = true
                this.searchItems = res.data.data
            }
            
        } )
    },
    toggleSearch() {
      let searchIcon = this.$refs.searchMobile;
      let searchBox = this.$refs.navSearch;

      searchBox.classList.toggle("active");
      searchIcon.classList.toggle("active");
    },
    toggleDropdown(event) {
      // Toggle dropDown
      this.showYes = !this.showYes;
      this.showYes2 = false;
      event.stopPropagation();
    },
    toggleDropdown2(event) {
      // Toggle dropDown
      this.showYes2 = !this.showYes2;
      this.showYes = false;
      event.stopPropagation();
    },
    hideForce(event) {
      this.showYes = false;
      this.showYes2 = false;
      event.stopPropagation();
    },
    changeLocale(){
        let lang = 'ar';
        if(this.$i18n.locale == 'ar'){
            lang = 'en';
        }
        if(sessionStorage.getItem('lang')){
            sessionStorage.removeItem('lang');
        }
        sessionStorage.setItem('lang' ,lang);
        location.reload();
    },


    async getHomeLogo(){
      await axios.get('home' , {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.nav_and_footer_data = res.data.data.nav_and_footer_data
      } )
      .catch( (err)=>{
        console.error(err)
      } )
    },

    // get notification count 
    async getNotficationCount(){
      await axios.get('count-notifications', {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.notyCount = res.data.data.count
      } )

    },
    // get notification 
    async getNotification(){
      await axios.get(`notifications` , {
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.notifications = res.data.data.notifications;
        this.slicedNotification = this.notifications.slice(0,2);

        console.log(this.notifications)
        console.log(this.slicedNotification)
      } )
      .catch( (err)=>{
        console.error(err)
      } )
    },
  },
  watch:{
    searchBar(){
      if( this.searchBar == '' ){
        this.showList = false
        console.log('dd')
      }
    }
  },
  mounted(){
    this.getHomeLogo()
    this.getNotficationCount()
    this.getNotification()

    this.loggedIn = localStorage.getItem('IsLoggedIn')


    if( localStorage.getItem('notApproved') == 'true' ){
      this.hideLogOut = false
    }
  },
  components:{
    removeAccount ,
    doneRemove,
    logOut,
    regiesterComponent,
    activationCode,
    loginComponent
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #262626;
}
.lang-m-spe {
  background-color: #2abdc7;
  color: #fff;
  padding: 10px 12px;
  border-radius: 5px 12px;
}
</style>
<style lang="scss">
.filteredSearch{
    position: absolute;
    width: 100%;
    max-height: 200px;
    border-radius: 5px;
    border: 1px solid #2abdc7;
    padding: 10px 5px;
    background-color: #fff;
    top: 45px;
    right:0;
    overflow-y: auto;
    z-index: 99;
    li.adName{
      border-bottom: 1px solid #dfdddd;
      cursor: pointer;
      padding-bottom: 8px;
    }
}
.count_notification{
    position: absolute;
    background: #2abdc7;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    font-size: 13px;
    color: #fff;
    right: 17px;
    top: -4px;
}
</style>