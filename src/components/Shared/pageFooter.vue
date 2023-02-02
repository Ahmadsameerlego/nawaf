<template>
  <!-- Start Footer -->
  <footer class="footer">
    <div class="container">
      <div class="row footer-cards gy-5">
        <div class="col-lg-5 col-md-6 col-12">
          <div class="footer-logo">
            <a href="index.html" class="foot-logo-img">
              <img :src="logo" alt="" />
            </a>
            <p class="footer-info">
              هذا النص هو مثال لنص يمكن ان يستخدم هذا النص هو مثال لنص يمكن ان
              يستخدم في نفس المساحةفي نفس المساحة
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-6">
          <div class="foot-content">
            <h3 class="footer-head"> {{ $t('footer.mainLinks') }} </h3>
            <ul class="footer-links row">
              <div class="col-lg-6">
                <router-link to="/" class="link"> {{ $t('footer.home') }} </router-link>
                <router-link to="/" class="link"> {{ $t('footer.cats') }} </router-link>
                <router-link to="/" class="link"> {{ $t('footer.upload') }} </router-link>
                <router-link to="/" class="link"> {{ $t('footer.contact') }} </router-link>
                <router-link to="/" class="link"> {{ $t('footer.terms') }} </router-link>
              </div>
              <div class="col-lg-6">
                <router-link to="/" class="link"> {{ $t('nav.profile') }} </router-link>
                <router-link to="/" class="link"> {{ $t('nav.favs') }} </router-link>
              </div>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-2 col-6">
          <div class="foot-content">
            <h3 class="footer-head"> {{ $t('footer.followUs') }} </h3>
            <ul class="footer-links">
              <a href="#" class="link"> {{ $t('footer.facebook') }} </a>
              <a href="#" class="link"> {{ $t('footer.insta') }} </a>
              <a href="#" class="link"> {{ $t('footer.twitter') }} </a>
              <a href="#" class="link">  {{ $t('footer.youtube') }}</a>
              <a href="#" class="link">  {{ $t('footer.snap') }}</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer -->

  <!-- Start Copy Right -->
  <div class="copy-right">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="copy">
            <a href="https://aait.sa/" target="_blank"
              > {{  $t('footer.awamer') }} </a
            >
            <span> {{ $t('footer.nawaf') }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Copy Right -->
</template>

<script>
export default {
  data() {
    return {
      logo: require("../../assets/imgs/nawaf.png"),
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #262626;
}
</style>
