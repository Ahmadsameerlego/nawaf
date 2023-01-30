<template>
  <!-- Start Navbar -->
  <nav class="navbar-m" @click="hideForce($event)">
    <div class="container">
      <div class="nav-content">
        <a href="index.html" class="logo">
          <img :src="logo" alt="" />
        </a>

        <div class="links-container">
          <form action="" class="search nav-search" ref="navSearch">
            <input type="text" placeholder="ابحث هنا" class="search-input" />
            <button type="submit" class="search-btn">
              <!-- <i class="fa-solid fa-sliders"></i> -->
              <img :src="filterImg" alt="" />
            </button>
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
                >الرئيسية</router-link
              >
            </li>
            <li>
              <router-link
                to="/depatments"
                class="links-a"
                :class="{ active: $route.path === '/depatments' }"
                >الأقسام</router-link
              >
            </li>
            <li>
              <router-link
                to="/favView"
                class="links-a"
                :class="{ active: $route.path === '/favView' }"
                >المفضلة</router-link
              >
            </li>
            <li>
              <router-link
                to="/contactView"
                class="links-a"
                :class="{ active: $route.path === '/contactView' }"
                >تواصل معنا</router-link
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
          <div class="icons">
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
                <router-link to="/editProfileView" class="drop-link"
                  >بياناتي</router-link
                >
                <router-link to="/ratingView" class="drop-link"
                  >تقييماتي</router-link
                >
                <router-link to="/advertisementsView" class="drop-link"
                  >إعلاناتي</router-link
                >
                <router-link
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#alertModal"
                  class="drop-link"
                  >تسجل خروج</router-link
                >
                <router-link
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#alert2Modal"
                  class="drop-link"
                  >حذف الحساب</router-link
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
              <div
                class="not-drop dropdown-m dropdown-active"
                data-drop="not"
                :class="{ 'active-drop': showYes2 }"
              >
                <div>
                  <router-link
                    to="/"
                    class="drop-text"
                    v-for="noti in notifications"
                    :key="noti.id"
                  >
                    {{ noti.title }}</router-link
                  >
                </div>
                <router-link to="/notificationsView" class="more-anchor">المزيد</router-link>
              </div>
            </div>
            <button class="lang-m-spe">AR</button>
          </div>
          <!-- <a
            href="#"
            class="login-anchor"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            >تسجيل دخول</a
          > -->
          <button
            class="main-btn up"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            ارفع إعلانك
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
export default {
 
  data() {
    return {
      showYes: false,
      showYes2: false,
      logo: require("../../assets/imgs/nawaf.png"),
      filterImg: require("../../assets/imgs/icons8-slider-60.png"),
      userImg: require("../../assets/imgs/user.png"),
      notiImg: require("../../assets/imgs/bell.png"),
  
      notifications: [
        // array
        { id: 1, title: "هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحة" },
        { id: 2, title: "هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحة" },
        { id: 3, title: "هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحة" },
      ],
    };
  },
  methods: {
    toggleBar() {
      // SideBar
      const showSideBar = this.$refs.toggleIcon;
      const SideBar = this.$refs.ulBar;

      SideBar.classList.toggle("active");
      showSideBar.classList.toggle("active");

      // Show And Hide Search Navbar
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
