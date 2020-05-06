<template>
  <div>
    <div class="text-2xl" v-text="title"></div>
    <div class="home">
      <button @click="toggleModal">Open Modal</button>
      <transition name="fade">
        <div v-if="isOpen" class="modal w-48 h-48 bg-gray-400 rounded-lg">
          <button @click="toggleModal">Close</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Fade Modal In and Out",
      isOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

</style>
