<template>
  <!-- Start Navbar -->
  <nav class="navbar-m">
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
              <router-link to="/" class="links-a" :class="{ active : $route.path === '/'}">الرئيسية</router-link>
            </li>
            <li>
              <router-link to="/depatments" class="links-a" :class="{ active : $route.path === '/depatments'}"
                >الأقسام</router-link
              >
            </li>
            <li>
              <router-link to="/favView" class="links-a" :class="{ active : $route.path === '/favView'}">المفضلة</router-link>
            </li>
            <li>
              <router-link to="/contactView" class="links-a" :class="{ active : $route.path === '/contactView'}">تواصل معنا</router-link>
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
          <a
            href="#"
            class="login-anchor"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            >تسجيل دخول</a
          >
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
</template>

<script>
export default {
  data() {
    return {
      logo: require("../../assets/imgs/nawaf.png"),
      filterImg: require("../../assets/imgs/icons8-slider-60.png"),
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
    
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #262626;
}
</style>
