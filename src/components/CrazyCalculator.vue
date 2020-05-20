<template>
  <div class="flex justify-center">
    <div class="w-64">
      <transition name="fade" mode="out-in">
        <div
          class="h-16 w-full text-right text-white text-5xl bg-black border-none px-2"
        >
          {{ display }}
        </div>
      </transition>
      <transition-group
        class="grid grid-cols-4"
        name="slide-up"
        appear
      >
        <div
          v-for="button in buttons"
          :class="[
            'border h-16 text-2xl',
            button.rectangle_hor ? 'col-span-2'  : 'col-span-1',
          ]"
          :key="button.value"
        >
          <button @click="shuffle()" class="w-full h-full">
            {{ button.label }}
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
      buttons: [
        {
          label: "C",
          value: "clear",
          rectangle_hor: true,
        }, 
        {
          label: "del",
          value: "delete",
        }, 
        {
          label: "÷",
          value: "div",
        }, 
        {
          label: "7",
          value: 7,
        },
        {
          label: "8",
          value: 8,
        },
        {
          label: "9",
          value: 9,
        },
        {
          label: "×",
          value: "mult",
        },
        {
          label: "4",
          value: 4,
        },
        {
          label: "5",
          value: 5,
        },       
        {
          label: "6",
          value: 6,
        },
        {
          label: "−",
          value: "sub",
        },
        {
          label: "1",
          value: 1,
        },
        {
          label: "2",
          value: 2,
        },
        {
          label: "3",
          value: 3,
        },
        {
          label: "+",
          value: "add",
        },   
        {
          label: "0",
          value: 0,
          rectangle_hor: true,
        },
        {
          label: ".",
          value: ".",
        }, 
        {
          label: "=",
          value: "sum",
        },
      ],
    };
  },
  methods: {
    inputTrigger: function() {
      this.shuffle();
      // if (c.value === "=") {
      //   this.evaluate();
      // } else if (c.value === "C") {
      //   this.clearDisplay();
      // } else {
      //   this.display += c.value;
      // }
    },
    shuffle: function() {
      this.buttons.sort(() => Math.random() - 0.5);
    },
    evaluate: function() {
      this.display = eval(this.display).substring(0, 8);
    },
    clearDisplay: function() {
      this.display = "";
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
</style>
