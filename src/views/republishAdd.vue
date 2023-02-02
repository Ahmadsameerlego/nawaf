<template>
  <!-- Start Add Advertisements Section -->
  <div class="add-ads main-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="add-form section-style sec-padding">
            <div class="row">
              <div class="col-lg-8 col-md-10 col-11 mx-auto">
                <form action="add-ads-pay.html">
                  <h2 class="section-title">إعادة نشر الإعلان</h2>
                  <div class="inputs-container">
                    <div class="upload-ads-img">
                      <span class="ads-img-text">
                        ارفع صور الإعلان
                        <span class="ads-text">بحد اقصى 6 صور</span>
                      </span>
                      <div class="upload-img-container">
                        <div class="img-upload-show">
                          <div
                            class="edit-box"
                            v-for="imgUp,i in upImgs"
                            :key="imgUp.id"
                          >
                            <input
                              type="file"
                              name=""
                              accept="image/*"
                              @change="onFileChange($event , i)"
                              :id="'imgUpload' + i"
                              class="hidden-input img-edit-input"
                            />
                            <label
                              :for="'imgUpload' + i"
                              class="edit-img"
                            >
                              <img
                                :src="imgUp.img"
                                alt=""
                                class="edited-img"
                                :class="{ wid: uploaded }"
                              />
                              <span class="edit-overlay">
                                <img :src="edit" alt="" />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> اسم الإعلان </label>
                      <div class="main-input">
                        <input
                          type="text"
                          class="input-me"
                          placeholder="أدخل اسم الإعلان"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> سعر الإعلان </label>
                      <div class="main-input">
                        <input
                          type="number"
                          class="input-me"
                          placeholder="أدخل سعر الإعلان"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> مدة الإعلان </label>
                      <div class="main-input">
                        <input
                          type="text"
                          class="input-me"
                          placeholder="أدخل مدة عرض الإعلان"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> القسم الرئيسي </label>
                      <div class="main-input">
                        <select name="" id="" class="input-me select">
                          <option value="" selected disabled>
                            اختر القسم الرئيسي
                          </option>
                          <option value="">اختر القسم الرئيسي</option>
                          <option value="">اختر القسم الرئيسي</option>
                        </select>
                        <!-- <i class="fa-solid fa-angle-down main-icon"></i> -->
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> القسم الفرعي </label>
                      <div class="main-input">
                        <select name="" id="" class="input-me select">
                          <option value="" selected disabled>
                            اختر القسم الفرعي
                          </option>
                          <option value="">اختر القسم الرئيسي</option>
                          <option value="">اختر القسم الرئيسي</option>
                        </select>
                        <!-- <i class="fa-solid fa-angle-down main-icon"></i> -->
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> المدينة </label>
                      <div class="main-input">
                        <select name="" id="" class="select">
                          <option value="" selected disabled>
                            اختر المدينة
                          </option>
                          <option value="">اختر القسم الرئيسي</option>
                          <option value="">اختر القسم الرئيسي</option>
                        </select>
                        <!-- <i class="fa-solid fa-angle-down main-icon"></i> -->
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> تفاصيل الإعلان </label>
                      <div class="main-input">
                        <textarea
                          class="input-me text-area"
                          placeholder="اكتب تفاصيل الإعلان"
                        ></textarea>
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> وسيلة اتصال </label>
                      <div class="main-input">
                        <input
                          type="text"
                          class="input-me"
                          placeholder="أدخل رقم الجوال أو البريد الالكتروني"
                        />
                      </div>
                    </div>

                    <div class="input-g">
                      <label for="" class="main-label"> حالة المنتج </label>
                      <div class="radio-boxs">
                        <div class="box">
                          <input type="radio" name="rad1" id="da3ef" />
                          <label for="da3ef">جديد</label>
                        </div>
                        <div class="box">
                          <input type="radio" name="rad1" id="maqbool" />
                          <label for="maqbool">مستعمل</label>
                        </div>
                      </div>
                    </div>

                    <div class="input-g">
                      <button type="submit" class="main-btn md up mx-auto">
                        استمرار
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
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "republishAdd",
  data() {
    return {
      edit: require("../assets/imgs/edit.png"),

      upImgs: [
        // array
        {
          id: 1,
          img: require("../assets/imgs/user2.png"),
          uploaded: true,
        },
        {
          id: 2,
          img: require("../assets/imgs/user2.png"),
          uploaded: true,
        },
        {
          id: 3,
          img: require("../assets/imgs/user2.png"),
          uploaded: true,
        },
        {
          id: 4,
          img: require("../assets/imgs/user2.png"),
          uploaded: true,
        },
        {
          id: 5,
          img: require("../assets/imgs/user2.png"),
          uploaded: true,
        },
        {
          id: 6,
          img: require("../assets/imgs/user2.png"),
          uploaded: true,
        },
      ],
    };
  },
  methods: {
    onFileChange(event , i) {
      const file = event.target.files[0];
      console.log(event.target.files[0]);
      this.upImgs[i].img = URL.createObjectURL(file);
      this.uploaded = true;
    },
  },
  components: {},
});
</script>
<style>
.categories-con .categories-card {
  text-decoration: none;
  color: #262626;
}
</style>
