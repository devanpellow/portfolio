<template>
  <div class="flex">
    <div
      v-for="card in cards"
      :key="card.id"
      class="card modal my-2 mx-2 w-10 h-10 bg-gray-400 rounded-lg"
    ></div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data: function() {
    return {
      title: "Stagger",
      cards: [
        { id: 123 },
        { id: 456 },
        { id: 789 },
        { id: 321 },
        { id: 654 },
        { id: 987 },
      ],
    };
  },
  methods: {
    function() {},
  },
  mounted() {
    gsap.from('.card', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1',
      stagger: {
        each: 0.1,
        // from: 'edges, center,'
        from: 'center'
      }
    })
  }
};
</script>

<style></style>
