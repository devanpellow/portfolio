<template>
  <div class="">
    <Header></Header>
    <div class="w-full flex justify-center justify-around">
      <AnimationOne></AnimationOne>
      <AnimationTwo></AnimationTwo>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import AnimationOne from "../components/AnimationOne.vue";
import AnimationTwo from "../components/AnimationTwo";
export default {
  components: {
    Header,
    AnimationOne,
    AnimationTwo,
  },
};
</script>

<style></style>
