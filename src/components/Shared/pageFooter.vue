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
            <h3 class="footer-head">روابط أساسية</h3>
            <ul class="footer-links row">
              <div class="col-lg-6">
                <router-link to="/" class="link">الرئيسية</router-link>
                <router-link to="/" class="link">الأقسام</router-link>
                <router-link to="/" class="link">ارفع اعلان</router-link>
                <router-link to="/" class="link">تواصل معنا</router-link>
                <router-link to="/" class="link">الشروط والأحكام</router-link>
              </div>
              <div class="col-lg-6">
                <router-link to="/" class="link">بياناتي</router-link>
                <router-link to="/" class="link">المفضلة</router-link>
              </div>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-2 col-6">
          <div class="foot-content">
            <h3 class="footer-head">تابعنا عبر</h3>
            <ul class="footer-links">
              <a href="#" class="link">فيسبوك</a>
              <a href="#" class="link">انستجرام</a>
              <a href="#" class="link">تويتر</a>
              <a href="#" class="link">يوتيوب</a>
              <a href="#" class="link">سناب شات</a>
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
              >تصميم وبرمجة مؤسسة أوامر الشبكة</a
            >
            <span>جميع الحقوق محفوظة لموقع نواف</span>
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
