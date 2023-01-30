<template>
  <!-- Alert Logout Modal -->
  <div
    class="modal fade done"
    id="alertModal"
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
            <h2 class="section-title">هل تود بالفعل تسجيل خروج؟</h2>
          </div>

          <div class="modal-body">
            <img :src="logOutImg" alt="" class="done-img" />
          </div>

          <div class="modal-footer">
            <button
              class="main-btn red md up"
              type="submit"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              نعم
            </button>
            <button
              class="main-btn md up"
              type="submit"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              لا
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--logout modal-->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "removeAccountModal",
  data() {
    return {
        logOutImg: require("../../assets/imgs/alert.gif"),
    };
  },
  methods: {},

  components: {},
});
</script>
<style></style>
