<template>
  <div>
    <div class="text-2xl" v-text="title"></div>
    <div class="flex flex-col items-center">
      <form v-on:submit.prevent="addEntry">
        <input type="date" v-model="newEntry.date" placeholder="Date" />
        <input
          type="text"
          v-model="newEntry.description"
          placeholder="Description"
        />
        <select v-model="newEntry.currency">
          <option v-for="currency in currencies" :key="currency.id" :value="currency.sign">
            {{ currency.label }}
          </option>
        </select>
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
      <table class="table-auto w-1/2">
        <thead>
          <th class="px-4 py-2">Date</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Amount</th>
        </thead>
        <tbody>
          <transition-group name="slide-up" tag="td" appear>
          <tr v-for="entry in entries" :key="entry.id">
            <td class="border px-4 py-2" v-text="entry.date"></td>
            <td class="border px-4 py-2" v-text="entry.description"></td>
            <td class="border px-4 py-2" >{{entry.currency}} {{entry.amount}}</td>
            <td @click="deleteEntry(entry)" class="border px-4 py-2">
              <button>Delete</button>
            </td>
          </tr>
          </transition-group>
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
      currencies: [
        { id: 1, sign: "$", label: "CAD" },
        { id: 2, sign: "€", label: "Euro" },
      ],

      newEntry: {
        description: "",
        amount: "",
        currency: "",
        date: "",
      },
      entries: [
        {
          id: 1,
          description: "Take Out Burritos",
          amount: 10.4,
          currency: "$",
          date: "10/05/2020",
        },
        {
          id: 2,
          description: "Clothes from American Eagle",
          amount: 70.48,
          currency: "$",
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
        currency: "",
        date: "",
      };
    },
    deleteEntry(entry) {
      let index = this.entries.indexOf(entry);
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
