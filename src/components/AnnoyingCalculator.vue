<template>
  <div>
    <button @click="shuffle()">Shuffle</button>
    <div class="h-64 grid grid-rows-5 grid-flow-col gap-1">
      <div class="w-1/4 border-solid border-2 border-gray-600" v-for="c in calculator" :key="c.key">{{ c.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      calculator: [
        {
          value: 1,
          pos: 1,
          key: 1,
        },
        {
          value: 2,
          pos: 2,
          key: 2,
        },
        {
          value: 3,
          pos: 3,
          key: 3,
        },
        {
          value: 4,
          pos: 4,
          key: 4,
        },
        {
          value: 5,
          pos: 5,
          key: 5,
        },
        {
          value: 6,
          pos: 6,
          key: 6,
        },
        {
          value: 7,
          pos: 7,
          key: 7,
        },
        {
          value: 8,
          pos: 8,
          key: 8,
        },
        {
          value: 9,
          pos: 9,
          key: 9,
        },
        {
          value: 0,
        },
        {
          value: "C",
          pos: 10,
          key: 10,
        },
        {
          value: "(",
          pos: 11,
          key: 11,
        },
        {
          value: ")",
          pos: 12,
          key: 12,
        },
        {
          value: "/",
          pos: 13,
          key: 13,
        },
        {
          value: "X",
          pos: 14,
          key: 14,
        },
        {
          value: "-",
          pos: 15,
          key: 15,
        },
        {
          value: "+",
          pos: 16,
          key: 16,
        },
        {
          value: "=",
          pos: 17,
          key: 17,
        },
        {
          value: ".",
          pos: 18,
          key: 18,
        },
        {
          value: "+/-",
          pos: 19,
          key: 19,
        },
      ],
    };
  },
  methods: {
    shuffle: function() {
      this.calculator.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style></style>
