<template>
  <div class="h-screen bg-black">
    <Intro></Intro>
    <ProjectList></ProjectList>
  </div>
</template>

<script>
import ProjectList from '../components/ProjectList.vue'
import Intro from '../components/Intro.vue'
export default {
  components: {
    ProjectList,
    Intro
  }
}
</script>

<style></style>
