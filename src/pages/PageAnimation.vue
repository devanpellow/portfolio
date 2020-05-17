<template>
  <div class="">
    <Header></Header>
    <div class="flex flex-col">
      <AnimationOne />
        <AnimationTwo />
      <AnimationThree />
        <AnimationFour />
      <AnimationFive />
        <AnimationSix />
      <Stagger />
      <AnimationState />
      <AnimationTimelines />
      </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import AnimationOne from "../components/animations/AnimationOne.vue";
import AnimationTwo from "../components/animations/AnimationTwo";
import AnimationThree from "../components/animations/AnimationThree";
import AnimationFour from "../components/animations/AnimationFour";
import AnimationFive from "../components/animations/AnimationFive";
import AnimationSix from "../components/animations/AnimationSix";
import Stagger from "../components/animations/Stagger";
import AnimationState from "../components/animations/AnimationState";
import AnimationTimelines from "../components/animations/AnimationTimelines";
export default {
  components: {
    Header,
    AnimationOne,
    AnimationTwo,
    AnimationThree,
    AnimationFour,
    AnimationFive,
    AnimationSix,
    Stagger,
    AnimationState,
    AnimationTimelines,
  },
};
</script>

<style></style>
