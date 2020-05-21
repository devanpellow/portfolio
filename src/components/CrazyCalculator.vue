<template>
  <div class="flex justify-center">
    <div class="w-64">
      <transition name="fade" mode="out-in">
        <div
          class="h-16 w-full text-right text-white text-5xl bg-black border-none px-2"
        >
          {{ current || "" }}
        </div>
      </transition>
      <div class="flex flex-row">
        <div class="border w-1/2 h-16 text-2xl">
          <button @click="clear()" value="clr" class="w-full h-full">
            C
          </button>
        </div>
        <div class="border w-1/4 h-16 text-2xl">
          <button @click="del()" value="del" class="w-full h-full">
            del
          </button>
        </div>
        <div class="border w-1/4 h-16 text-2xl">
          <button @click="divide()" value="div" class="w-full h-full">
            ÷
          </button>
        </div>
      </div>
      <div class="flex">
        <transition-group
          class="w-3/4 justify-center flex flex-wrap"
          name="slide-up"
          appear
        >
          <div
            v-for="number in numbers"
            class="border h-16 w-16 text-2xl"
            :key="number.value"
          >
            <button @click="append(number)" class="w-full h-full">
              {{ number.label }}
            </button>
          </div>
        </transition-group>
        <div class="flex flex-col">
          <div class="border h-16 w-16 text-2xl">
            <button @click="times()" value="div" class="w-full h-full">
              ×
            </button>
          </div>
          <div class="border h-16 w-16 text-2xl">
            <button @click="minus()" value="div" class="w-full h-full">
              −
            </button>
          </div>
          <div class="border h-16 w-16 text-2xl">
            <button @click="add()" value="div" class="w-full h-full">
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="-my-16 border h-16 w-16 text-2xl">
          <button @click="dot('.')" value="." class="w-full h-full">
            .
          </button>
        </div>
        <div :class="['border ml-32 h-16 w-32 text-2xl']">
          <button @click="equal()" value="sum" class="w-full h-full">
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
      previous: null,
      current: "",
      operator: null,
      operatorClicked: false,

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
    };
  },
  methods: {
    append(number) {
      if (number.value >= 0 || number.value < 9) {
        this.shuffle();

        if (this.operatorClicked) {
          this.current = "";
          this.operatorClicked = false;
        }
        this.current = `${this.current}${number.value}`;
      } else {
        if (this.operatorClicked) {
          this.current = "";
          this.operatorClicked = false;
        }
        this.current = `${this.current}${number}`;
      }
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      )}`;
      this.previous = null;
    },

    shuffle() {
      this.numbers.sort(() => Math.random() - 0.5);
    },
    clear() {
      this.current = "";
    },
    del() {
      this.current = this.current.substring(0, this.current.length - 1);
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
