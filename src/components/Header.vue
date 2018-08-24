<template>
  <div class="header">
    <div class="header-wrapper">
      <img class="logo" src="@/assets/img/logo.png" alt="">
      <img class="menu" src="@/assets/img/menu1.png" alt="" @click="toggleAction()">
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      aaa: false,
    };
  },
  computed: {
    ...mapGetters(["menuFlag"])
  },
  created() {
    console.log(this.menuFlag);
  },
  methods: {
    ...mapActions(["toggleAction"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding:10px 20px;
  background: #fff;
  z-index: 10;
  box-sizing: border-box;
  box-shadow: 0 0 2px #333;

  .header-wrapper {
    width: 1340px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      height: 44px;
    }

    .menu {
      display: none;
      width: 44px;
      
    }
  }
}

@media only screen and (max-width: 1400px) {
  .header {
    .header-wrapper {
      width: 1100px;
    }
  }
}

@media only screen and (max-width: 992px) {
  .header {
    padding: 10px 20px;
    .header-wrapper {
      width:100%;
      .logo {
        height: 22px;
      }
      .menu {
        display: block;
        width: 22px;
      box-sizing: border-box;
      }
    }
  }
}
</style>
