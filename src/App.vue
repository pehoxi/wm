<template>
  <div>
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import { mapActions } from "vuex";
export default {
  components: {
    FooterGuide,
  },
    methods: {
    ...mapActions(["getAddress","getCategorys","getUserInfo"]),
  },
  mounted() {
    
    this.getAddress();
    this.getCategorys();
    this.getUserInfo();

      // console.log(this.$store.state);
/*     this.$nextTick(function () {
          this.getAddress();
      console.log(this.$store.state.address.address);
    }); */
    /* 发送dispatch请求给action进行处理*/
    // this.$store.dispatch('getAddress');
    // console.log(this);
  },
};
</script>

<style lang="stylus" scoped></style>