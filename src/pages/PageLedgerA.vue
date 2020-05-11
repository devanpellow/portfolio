<template>
  <div>
    <div class="text-6xl text-center py-10">Ledger A</div>
    <LedgerA />
    <div class="w-1/2 text-center" v-html="quote"></div>
  </div>
</template>

<script>
// import Header from '../components/Header.vue'
import LedgerA from "../components/LedgerA.vue";
export default {
  components: {
    // Header,
    LedgerA,
  },
  data: function() {
    return {
      quote: "<strong>“No less than his business life, Rockefeller’s private life was ruled by bookkeeping entries. Since he found numbers so clean and soothing in their simplicity, he applied the business principles…to his own personaleconomy. When he started working in September 1855, he paid a dime for asmall red book, anointed Ledger A, in which he minutely recorded hisreceipts and expenditures. Many of his young contemporaries kept suchrecord books but seldom with such exacting care. For the remainder of hislife, Rockefeller treated Ledger A as his most sacred relic.”</strong> (Chernow,Ron (2007-12-18). Titan: The Life of John D. Rockefeller, Sr. (KindleLocations 1321-1325). Knopf Doubleday Publishing Group. Kindle Edition.)",
    };
  },
  methods: {
    function() {},
  },
};
</script>

<style></style>
