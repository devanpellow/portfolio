<template>
  <div>
    <div class="flex flex-col items-center">
      <form v-on:submit.prevent="addEntry">
        <input
          type="text"
          v-model="newDailyGoal.description"
          placeholder="Description"
        />
        <button
          v-on:submit.prevent="addEntry"
          class="bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
        >
          Set Daily Goals
        </button>
      </form>
      <transition-group name="slide-up" tag="ul" appear>
        <li v-for="goal in dailyGoals" :key="goal.id">
          <button class="px-2 py-2" @click="deleteDailyGoal(goal)">X</button
          ><input v-model="checkedItems" type="checkbox" name="completed" /> {{ goal.description }}
        </li>
      </transition-group>
      <div class="flex flex-wrap sm:w-screen w-3/4">
        <div
          v-for="day in trackedDays"
          :key="day.day"
          :class="['card my-2 mx-2 w-10 h-10 rounded-lg', 
          (day.goalsCompleted === 1) ? 'bg-green-200' : 'bg-gray-400',
          (day.goalsCompleted === 2) ? 'bg-green-300' : 'bg-gray-400',
          (day.goalsCompleted === 3) ? 'bg-green-600' : 'bg-gray-400' ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data: function() {
    return {
      title: "",
      newDailyGoal: {
        id: "",
        description: "",
        completed: false,
      },
      dailyGoals: [
        { id: 1, description: "Read for 15mins", completed: false },
        { id: 2, description: "Push To GitHub", completed: false },
        { id: 3, description: "Workout or Walk", completed: false },
      ],
      trackedDays: [
        {day: 3, dailyGoals: 3, goalsCompleted: 1},
        {day: 1, dailyGoals: 3, goalsCompleted: 3},
        {day: 2, dailyGoals: 3, goalsCompleted: 2},
        {day: 4, dailyGoals: 3, goalsCompleted: 0},
        {day: 5, dailyGoals: 3, goalsCompleted: 3},
        {day: 6, dailyGoals: 3, goalsCompleted: 3},
        {day: 7, dailyGoals: 3, goalsCompleted: 2},
        {day: 8, dailyGoals: 3, goalsCompleted: 3},
        {day: 9, dailyGoals: 3, goalsCompleted: 1},
        {day: 10, dailyGoals: 3, goalsCompleted: 2},
        {day: 3, dailyGoals: 3, goalsCompleted: 1},
        {day: 1, dailyGoals: 3, goalsCompleted: 3},
        {day: 2, dailyGoals: 3, goalsCompleted: 2},
        {day: 4, dailyGoals: 3, goalsCompleted: 0},
        {day: 5, dailyGoals: 3, goalsCompleted: 3},
        {day: 6, dailyGoals: 3, goalsCompleted: 3},
        {day: 7, dailyGoals: 3, goalsCompleted: 2},
        {day: 8, dailyGoals: 3, goalsCompleted: 3},
        {day: 9, dailyGoals: 3, goalsCompleted: 1},
        {day: 10, dailyGoals: 3, goalsCompleted: 2},
      ]
    };
  },

  methods: {
    addEntry() {
      this.newDailyGoal.id = Math.floor(Math.random() * Math.floor(100)) + 1;
      this.dailyGoals.push(this.newDailyGoal);
      this.clearForm();
    },
    clearForm() {
      this.newDailyGoal = {
        id: "",
        description: "",
        completed: false,
      };
    },
    deleteDailyGoal(goal) {
      let index = this.dailyGoals.indexOf(goal);
      this.dailyGoals.splice(index, 1);
    },
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

<style>
.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.5s ease;
}

.slide-up-move {
  transition: transform 0.8s ease-in-out;
}
</style>
