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
      <div class="flex flex-row">
        <div :class="['border w-1/2 h-16 text-2xl']">
          <button @click="shuffle()" class="w-full h-full">C</button>
        </div>
        <div :class="['border w-1/4 h-16 text-2xl']">
          <button @click="shuffle()" class="w-full h-full">del</button>
        </div>
        <div :class="['border w-1/4 h-16 text-2xl']">
          <button @click="shuffle()" class="w-full h-full">÷</button>
        </div>
      </div>
      <div class="flex">
        <transition-group class="w-3/4 justify-center flex flex-wrap" name="slide-up" appear>
          <div
            v-for="number in numbers"
            :class="['border h-16 w-16 text-2xl']"
            :key="number.value"
          >
            <button @click="shuffle()" class="w-full h-full">
              {{ number.label }}
            </button>
          </div>
          
        </transition-group>
        <div class="flex flex-col">
          <div
            v-for="operator in operators"
            :class="['border h-16 w-16 text-2xl']"
            :key="operator.value"
          >
            <button @click="shuffle()" class="w-full h-full">
              {{ operator.label }}
            </button>
          </div>
        </div>
      </div>
      <div>
        
        <div :class="['-my-16 border h-16 w-16 text-2xl']">
          <button @click="shuffle()" class="w-full h-full">
            .
          </button>
        </div>
        <div :class="['border ml-32 h-16 w-32 text-2xl']">
          <button @click="shuffle()" class="w-full h-full">
            =
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      display: "",
      numbers: [
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
          label: "0",
          value: 0,
        },
      ],
      operators: [
        {
          label: "×",
          value: "mul",
        },
        {
          label: "−",
          value: "sub",
        },
        {
          label: "+",
          value: "add",
        },
        // {
        //   label: "=",
        //   value: "sum",
        // },
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
      this.numbers.sort(() => Math.random() - 0.5);
      // this.buttons.sort((a, b) => a.number - b.number);
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
