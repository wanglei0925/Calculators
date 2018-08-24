<template>
  <div id="app">
    <v-header></v-header>
    <div class="calculators_wrapper clearfix">
      <left></left>
      <div class="calculators_right calculators_right_is">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
import VHeader from "@/components/Header";
import Left from "@/components/Left";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["menuFlag"])
  },
  mounted() {
    // this.getWidth(window.innerWidth);
    // window.onresize = function windowResize() {
    //   this.getWidth(window.innerWidth);
    // };
  },
  methods: {
    // ...mapActions(["show", "hide"]),
    // getWidth(wid) {
    //   if (wid >= 992) {
    //     this.show();
    //   } else {
    //     this.hide();
    //   }
    // }
  },
  components: {
    VHeader,
    Left
  }
};
</script>

