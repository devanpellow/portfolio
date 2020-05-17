<template>
  <div>
    <div class="text-2xl" v-text="title"></div>
    <div>
      <button @click="isOpen = !isOpen">Slide Drawer Open</button>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
      >
        <div v-if="isOpen" class="modal w-48 h-48 bg-gray-400 rounded-lg">
          Snappppy
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  data: function() {
    return {
      title: "Drawer",
      isOpen: false,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.width = '0em'
    },
    enter(el, done) {
     Velocity(
       el,
       {opacity:1, width: '12em'},
       //easing: [tension, friction]
       {duraction: 1000, easing: [70, 8], complete: done}
     ) 
    },
    leave(el, done) {
       Velocity(
       el,
       {opacity:0, width: '0em'},
       {duraction: 500, easing: 'easeInCubic', complete: done}
     ) 
    },
  },
};
</script>

<style></style>
