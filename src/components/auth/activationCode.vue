<template>
  <div
    class="modal fade"
    id="codeModal"
    ref="vuemodal"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button
          type="button"
          class="close-model-btn"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i class="fa-regular fa-circle-xmark"></i>
        </button>

        <div class="content-model-me">
          <div class="modal-header">
            <h2 class="section-title">كود التفعيل</h2>
          </div>

          <form action="add-ads.html" class="modal-form">
            <div class="modal-body">
              <h4 class="form-title">برجاء ادخال كود التفعيل المرسل إليك</h4>

              <div class="code-container">
                <v-otp-input
                  ref="otpInput"
                  input-classes="otp-input"
                  separator=" "
                  :num-inputs="6"
                  :should-auto-focus="true"
                  v-modal="otpInput"
                  name="otpInput"
                  :is-input-num="true"
                  @on-change="handleOnChange"
                  @on-complete="handleOnComplete"
                />
              </div>
            </div>

            <div class="modal-footer">
              <button
                class="main-btn md up"
                type="submit"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                إرسال
              </button>
            </div>

            <div class="reg text-center">
              <button type="button" class="reg-anchor">
                لم تستلم الكود بعد ؟ <span>أعد إرسال الكود</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import in a Vue component
import VOtpInput from "vue3-otp-input";

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.$refs.vuemodal);
    // `$`(this.$refs.vuemodal).on("hidden.bs.modal", console.log('ll'));
 
  },
  components: {
    VOtpInput,
  },
  setup() {
    const otpInput = null;

    const handleOnComplete = (value) => {
      console.log("OTP completed: ", value);
    };

    const handleOnChange = (value) => {
      console.log("OTP changed: ", value);
    };

    return { handleOnComplete, handleOnChange, otpInput };
  },
};
</script>

<style lang="scss">
.position-relative {
  position: relative;
}
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  &:focus {
    border: 1px solid #ccc;
  }
}

.otp-input.is-complete {
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>
