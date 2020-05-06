<template>
  <div>
    <div class="text-2xl" v-text="title"></div>
    <div>
      <button @click="slideModal">Slide Fade Modal</button>
      <transition name="slide-fade">
        <div v-if="isOpen" class="modal w-48 h-48 bg-gray-400 rounded-lg">
          <button @click="slideModal">Close</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Slide Fade In and Out",
      isOpen: false,
    };
  },
  methods: {
    slideModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
