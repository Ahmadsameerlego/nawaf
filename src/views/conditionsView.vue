<template>
  <!-- Start terms Section -->
  <div class="terms-section main-padding">
    <div class="container">
      <h2 class="section-title">الشروط والأحكام</h2>
      <div class="terms">
        <p class="terms-text" v-for="term in terms" :key="term.id">
          {{ term.title }}
        </p>

  

  
      </div>
    </div>
  </div>
  <!-- End terms Section -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "conditionView",
  data() {
    return {
      terms: [
        // array
        {
          id: 1,
          title:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا الننص هو مثال لنص يمكن ان يستخدم  هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي نيمكن ان يستخدم  هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي نيمكن ان يستخدم  هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي ن يمكن ان يستخدم  هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي نفس المساحة",
        },
        {
          id: 2,
          title:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا الننص هو مثال لنص يمكن ان يستخدم يمكن ان يستخدم  هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي نيمكن ان يستخدم  هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي نيمكن ان يستخدم  هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي ن هذا النص هو مثال لنص يمكن ان يستخدم في نفس المساحةفي نفس المساحة",
        },
 
      ],
    };
  },
  methods: {},

  components: {},
});
</script>
<style></style>
