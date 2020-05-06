<template>
  <div>
    <div class="text-2xl" v-text="title"></div>
    <div>
      <input type="text" v-model="newContact" placeholder="Name" />
      <button
        @click="addContact"
        class="bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
      >
        Add Contact
      </button>
      <button
        @click="sortContact"
        class="bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
      >
        Sort ContactS
      </button>

      <transition-group name="slide-up" tag="ul" appear>
        <li v-for="contact in contacts" :key="contact">
          {{ contact }}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Add to a list:",
      newContact: "",
      contacts: ["Harambe", "Elon's robot child", "Arnold Schwarzenegger", "Michael Jordan", "Britney 2007"],
    };
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact)
      this.newContact = ""
    },
    sortContact() {
      this.contacts.sort()
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
