<template>
  <div>
    <div v-text="title"></div>
    <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
      <div class="modal w-48 h-48 bg-gray-400 rounded-lg"></div>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data: function() {
    return {
      title: "GSAP",
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0,0)";
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    },
  },
};
</script>

<style></style>
