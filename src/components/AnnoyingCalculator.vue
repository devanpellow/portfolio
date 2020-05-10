<template>
  <div class="flex justify-center">
    <div>
      <transition name="fade" mode="out-in">
      <div
        class="h-16 w-full text-right text-white text-5xl bg-black border-none"
      >
        {{ display }}
      </div>
      </transition>
        <transition-group class="grid grid-rows-5 grid-flow-col"  name="slide-up" appear>
          <div
            v-for="c in calculator"
            :class="[
              'iphone-border w-16 h-12 text-2xl',
              c.grey ? 'bg-gray-400 text-black' : 'bg-orange-400 text-white',
            ]"
            :key="c.value"
          >
            <button @click="shuffle(c)" class="w-full h-full">
              {{ c.value }}
            </button>
          </div>
          </transition-group>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      display: "",
      calculator: [
        {
          value: "C",
          grey: true,
        },
        {
          value: 7,
          grey: true,
        },
        {
          value: 4,
          grey: true,
        },
        {
          value: 1,
          grey: true,
        },
        {
          value: "+ / -",
          grey: true,
        },
        {
          value: "(",
          grey: true,
        },
        {
          value: 8,
          grey: true,
        },
        {
          value: 5,
          grey: true,
        },
        {
          value: 2,
          grey: true,
        },
        {
          value: 0,
          grey: true,
        },
        {
          value: ")",
          grey: true,
        },
        {
          value: 9,
          grey: true,
        },
        {
          value: 6,
          grey: true,
        },
        {
          value: 3,
          grey: true,
        },
        {
          value: ".",
          grey: true,
        },
        {
          value: "/",
        },
        {
          value: "x",
        },
        {
          value: "-",
        },
        {
          value: "+",
        },
        {
          value: "=",
        },
      ],
    };
  },
  methods: {
    shuffle: function(c) {
      this.calculator.sort(() => Math.random() - 0.5);
      if (c.value === "=") {
        this.display = eval(this.display);
      } else if (c.value === "C") {
        this.display = "";
      } else {
        this.display += c.value;
      }
    },
  },
};
</script>

<style>
.slide-up-move {
  transition: transform 0.6s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.iphone-border {
  border: 1px solid #718096;
}
</style>
