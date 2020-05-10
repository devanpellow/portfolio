<template>
 <div id="app">
    <div id="nav" class="flex justify-center">
      <router-link class="px-10" to="/">Home</router-link> |
      <router-link class="px-10" to="/about">About</router-link> |
      <router-link class="px-10" to="/animations">Animations</router-link> |
      <router-link class="px-10" to="/annoying-calculator">Annoying Calculator</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>

/*** Transitions ***/
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
