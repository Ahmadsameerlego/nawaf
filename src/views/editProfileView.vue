<template>
  <!-- Start Add Advertisements Section -->
  <div class="add-ads main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="add-form section-style sec-padding">
            <div class="row">
              <div class="col-lg-8 col-md-10 col-11 mx-auto">
                <form action="" @submit.prevent="edit()">
                  <h2 class="section-title">تعديل بياناتي</h2>
                  <div class="inputs-container">
                    <div class="upload-ads-img">
                      <div class="upload-img-container">
                        <div class="upload-img">
                          <input
                            type="file"
                            name=""
                            accept="image/*"
                            id="imgUpload"
                            @change="onFileChange"
                            class="hidden-input upload-profile"
                          />
                          <div class="img-upload-show">
                            <label for="imgUpload" class="label-img">
                              <img
                                v-if="url"
                                :src="url"
                                ref="currentimg"
                                class="wid"
                                :class="{ wid: uploaded }"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> اسم المستخدم </label>
                      <div class="main-input">
                        <input
                          type="text"
                          class="input-me"
                          v-model="userEdit"
                          
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label">
                        البريد الالكترونى
                      </label>
                      <div class="main-input">
                        <input
                          type="email"
                          class="input-me"
                          v-model="emailEdit"
                          
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> رقم الجوال </label>
                      <div
                        class="main-input"
                        data-bs-toggle="modal"
                        data-bs-target="#phoneModal"
                      >
                        <input
                          type="number"
                          class="input-me"
                          v-model="numberEdit"
                      
                        />
                        <i class="fa-regular fa-pen-to-square main-icon"></i>
                      </div>
                    </div>

                    <div class="input-g mt-4">
                      <button
                        type="submit"
                        class="main-btn dark xl mx-auto up mb-3"
                      >
                        حفظ التعديلات
                      </button>
                      <button
                        type="button"
                        class="main-btn transparent xl mx-auto up"
                        data-bs-toggle="modal"
                        data-bs-target="#passwordModal"
                      >
                        تغيير كلمة المرور
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add Advertisements Section -->
  <editPassword />
</template>

<script>
import { defineComponent } from "vue";
import editPassword from '../components/profile/editPassword.vue';


export default defineComponent({
  name: "EditProfile vue",
  data() {
    return {
      url: require("../assets/imgs/user2.png"),
      uploaded: false,
      userEdit : 'عبدالرحمن سليمان ',
      emailEdit : 'solia@gmail.com',
      numberEdit : '010928736',
      
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.uploaded = true;
    },
  },
  components: {editPassword},
});
</script>
<style>
.categories-con .categories-card {
  text-decoration: none;
  color: #262626;
}
</style>
