<template>
  <div class="flex justify-center">
    <div>
      <transition name="fade" mode="out-in">
      <div
        class="h-16 w-full text-right text-white text-5xl bg-black border-none px-2"
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
              {{ c.label }}
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
          label: "C",
          grey: true,
        },
        {
          value: 7,
          label: 7,
          grey: true,
        },
        {
          value: 4,
          label: 4,
          grey: true,
        },
        {
          value: 1,
          label: 1,
          grey: true,
        },
        {
          value: "+ / -",
          label: "+ / -",
          grey: true,
        },
        {
          value: "(",
          label: "(",
          grey: true,
        },
        {
          value: 8,
          label: 8,
          grey: true,
        },
        {
          value: 5,
          label: 5,
          grey: true,
        },
        {
          value: 2,
          label: 2,
          grey: true,
        },
        {
          value: 0,
          label: 0,
          grey: true,
        },
        {
          value: ")",
          label: ")",
          grey: true,
        },
        {
          value: 9,
          label: 9,
          grey: true,
        },
        {
          value: 6,
          label: 6,
          grey: true,
        },
        {
          value: 3,
          label: 3,
          grey: true,
        },
        {
          value: ".",
          label: ".",
          grey: true,
        },
        {
          value: "/",
          label: "/",
        },
        {
          value: "*",
          label: "x",
        },
        {
          value: "-",
          label: "-",
        },
        {
          value: "+",
          label: "+",
        },
        {
          value: "=",
          label: "=",
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
