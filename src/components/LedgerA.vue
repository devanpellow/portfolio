<template>
  <div>
    <div class="text-2xl" v-text="title"></div>
    <div>
      <form v-on:submit.prevent="addEntry">
        <input type="text" v-model="newEntry.amount" placeholder="Amount" />
        <input type="text" v-model="newEntry.description" placeholder="Description" />
        <input type="date" v-model="newEntry.date" placeholder="Date" />
        <button
          v-on:submit.prevent="addEntry"
          class="bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
        >
          Add Entry
        </button>
      </form>

      <transition-group name="slide-up" tag="ul" appear>
        <li v-for="entry in entries" :key="entry.id">
          {{ entry.description }}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Record Transation:",
      selectedCurrency: "",
      currency: [
        { id: 1, type: "dollar", sign: "$" },
        { id: 2, type: "euro", sign: "€" },
      ],

      newEntry: {
        description: "",
        amount: "",
        date: "",
      },
      entries: [
        {
          id: 1,
          description: "Take Out Burritos",
          amount: 10.4,
          date: "10/05/2020",
        },
        {
          id: 2,
          description: "Clothes from American Eagle",
          amount: 70.48,
          date: "05/05/2020",
        },
      ],
    };
  },
  methods: {
    addEntry() {
      this.newEntry.id = Math.floor(Math.random() * Math.floor(100)) + 1;
      this.entries.push(this.newEntry);
    },
  },
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
