<template>
  <div class="flex flex-col items-center">
    <div clas="w-64">
      <input clas="w-64" type="text" v-model="input" />
    </div>
    <div class="h-64 w-64 grid grid-rows-5 gap-2 grid-flow-col">
      <div
        class="w-16 border-solid border-black border-2"
        v-for="c in calculator"
        :key="c.key"
      >
        <button @click="shuffle(c)" class="w-full h-full">
          {{ c.value }}
        </button>
      </div>
    </div>
    <div>{{ output }}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      input: "",
      output: "",
      calculator: [
        {
          value: "C",
        },
        {
          value: 7,
        },
        {
          value: 4,
        },
        {
          value: 1,
        },
        {
          value: "+ / -",
        },
        {
          value: "(",
        },
        {
          value: 8,
        },
        {
          value: 5,
        },
        {
          value: 2,
        },
        {
          value: 0,
        },
        {
          value: ")",
        },
        {
          value: 9,
        },
        {
          value: 6,
        },
        {
          value: 3,
        },
        {
          value: ".",
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
        this.output = eval(this.input);
      } else if (c.value === "C") {
        this.output = ""
        this.input = ""
      } else {
        this.input += c.value;
      }
    },
  },
};
</script>

<style>
input {
  border: 1px solid black;
}
</style>
