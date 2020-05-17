<template>
  <div>
    <div v-text="title"></div>
    <button @click="startRace">Click to race heros!</button>
    <div class="img-container">
      <img class="runner first" src="../../assets/images/flash.png" alt="Flash" />
      <img class="runner second" src="../../assets/images/quicksilver.png" alt="QuickSilver" />
      <img class="runner third" src="../../assets/images/silverSurfer.png" alt="SilverSurfer" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data: function() {
    return {
      title: "GSAP Timeline",
    };
  },
  methods: {
    startRace() {
     this.superHeroRace()
    },
   
   superHeroRace() {
    let tl = gsap.timeline({repeat: -1, repeatDelay: .75})
    tl.to('.first', { x: 700, duration: 6, ease: 'none'})
    tl.to('.second', { x: 700, duration: 4.5, ease: 'none'}, '<')
    tl.to('.third', { x: 700, duration: 2, ease: 'none'}, '<')
  }
  },
    
};
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
.img-container {
  width: 850px
}
</style>
