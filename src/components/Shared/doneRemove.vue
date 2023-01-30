<template>
  <!-- Done Modal -->
  <div
    class="modal fade done"
    id="done2Modal"
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
            <h2 class="section-title">تم حذف الحساب بنجاح</h2>
          </div>

          <div class="modal-body">
            <img :src="doneGif" alt="" class="done-img" />
          </div>

          <div class="modal-footer">
            <button
              class="main-btn md up"
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#regModal"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              إنشاء حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "removeAccountModal",
  data() {
    return {doneGif: require("../../assets/imgs/done.gif"),};
  },
  methods: {},

  components: {},
});
</script>
<style></style>
