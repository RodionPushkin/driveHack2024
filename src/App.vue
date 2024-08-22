<template>
  <preloader></preloader>
  <headerComponent></headerComponent>
  <mainComponent>
    <router-view></router-view>
  </mainComponent>
  <footerComponent></footerComponent>
</template>

<script>
import headerComponent from "@/components/header.component.vue";
import mainComponent from "@/components/main.component.vue";
import footerComponent from "@/components/footer.component.vue";
import store from "@/store";
import preloader from "@/components/preloader.component.vue";

export default {
  components: {preloader, headerComponent, mainComponent, footerComponent },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style scoped lang="scss">

</style>
