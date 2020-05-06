<template>
  <div class="">
    <Header></Header>
    <div class="flex flex-col">
      <div class="w-full my-16 flex justify-center justify-around">
        <AnimationOne />
        <AnimationTwo />
      </div>
      <div class="w-full my-16 flex justify-center justify-around">
        <AnimationThree />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import AnimationOne from "../components/animations/AnimationOne.vue";
import AnimationTwo from "../components/animations/AnimationTwo";
import AnimationThree from "../components/animations/AnimationThree";
export default {
  components: {
    Header,
    AnimationOne,
    AnimationTwo,
    AnimationThree,
  },
};
</script>

<style></style>
