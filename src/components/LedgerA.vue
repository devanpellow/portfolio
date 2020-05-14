<template>
  <div>
    <div class="text-2xl" v-text="title"></div>
    <div>
      <form v-on:submit.prevent="addEntry">
        <input type="date" v-model="newEntry.date" placeholder="Date" />
        <input
          type="text"
          v-model="newEntry.description"
          placeholder="Description"
        />
        <input type="text" v-model="newEntry.amount" placeholder="Amount" />

        <button
          v-on:submit.prevent="addEntry"
          class="bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
        >
          Add Entry
        </button>
        <button
          v-on:submit.prevent="clearEntryForm"
          class="bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
        >
          Cancel
        </button>
      </form>
      <table class="table-auto">
        <thead>
          <th class="px-4 py-2">Date</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Amount</th>
        </thead>
        <tbody>
          <tr v-for="entry in entries" :key="entry.id">
            <td class="border px-4 py-2" v-text="entry.date"></td>
            <td class="border px-4 py-2" v-text="entry.description"></td>
            <td class="border px-4 py-2" v-text="entry.amount"></td>
            <td @click="deleteEntry(entry)" class="border px-4 py-2">
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
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
      this.clearEntryForm();
    },
    clearEntryForm() {
      this.newEntry = {
        description: "",
        amount: "",
        date: "",
      };
    },
    deleteEntry(entry) {
      let index = this.entries.indexOf(entry)
      this.entries.splice(index, 1);
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
