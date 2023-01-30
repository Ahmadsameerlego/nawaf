<template>
  <!-- Start map Section -->
  <div class="map-section">
    <!-- <div id="map" style="width: 100%; height: 500px"></div> -->
    <GMapMap
      :center="center"
      :options="options"
      :zoom="5"
      map-type-id="terrain"
      style="width: 100vw; height: 500px"
    >
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="center = m.position"
      />
    </GMapMap>
  </div>
  <!-- End map Section -->

  <!-- Start Contact Section -->
  <div class="contact-section">
    <div class="container">
      <div class="contact-content px-md-5 px-4 sec-padding">
        <h2 class="section-title">تواصل معنا</h2>

        <div class="row gy-5">
          <div class="col-md-6">
            <form action="">
              <div class="inputs-container">
                <div class="input-g">
                  <div class="main-input">
                    <input
                      type="text"
                      class="input-contact"
                      placeholder="الاسم كاملاً"
                    />
                  </div>
                </div>

                <div class="input-g">
                  <div class="main-input">
                    <input
                      type="email"
                      class="input-contact"
                      placeholder="البريد الالكتروني"
                    />
                  </div>
                </div>

                <div class="input-g">
                  <div class="main-input">
                    <textarea
                      class="input-contact text-area"
                      placeholder="نص الرسالة"
                    ></textarea>
                  </div>
                </div>

                <div class="input-g">
                  <button type="submit" class="main-btn md up">إرسال</button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-md-6">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="contact-information">
                  <div class="contact-item">
                    <div class="contact-img">
                      <img :src="img1" alt="" />
                    </div>
                    <div class="contact-info">
                      <span class="contact-name">البريد الألكتروني</span>
                      <p class="contact-text">example@info.com</p>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="contact-img">
                      <img :src="img2" alt="" />
                    </div>
                    <div class="contact-info">
                      <span class="contact-name">رقم الجوال</span>
                      <p class="contact-text">9665215452452</p>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="contact-img">
                      <img :src="img3" alt="" />
                    </div>
                    <div class="contact-info">
                      <span class="contact-name">العنوان</span>
                      <p class="contact-text">شارع الملك فهد ، الرياض</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Contact Section -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  //   components: { GMapMap },
  name: "departmentsView",
  data() {
    return {
      img1: require("../assets/imgs/email.png"),
      img2: require("../assets/imgs/phone-call.png"),
      img3: require("../assets/imgs/location.png"),
      center: { lat: 24.746189966504275, lng: 46.87979460238138 },
      markers: [
        {
          position: {
            lat: 24.746189966504275,
            lng: 46.87979460238138,
          },
        },
      ],
    };
  },

  components: {},
});
</script>
<style scoped>
.contact-section
  .contact-content
  .contact-information
  .contact-item
  .contact-img
  img {
  max-height: 45px;
  max-width: 45px;
}
</style>
