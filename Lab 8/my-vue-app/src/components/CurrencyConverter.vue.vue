<!-- CurrencyConverter.vue -->
<template>
  <div>
    <h1>Currency Converter</h1>
    <label for="usdAmount">Enter amount in USD:</label>
    <input type="number" id="usdAmount" v-model="usdAmount" @input="convertCurrency">
    <p>Converted amount in EUR: {{ eurAmount }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usdAmount: '',
      eurAmount: ''
    };
  },
  methods: {
    convertCurrency() {
      const exchangeRate = 0.85; // 1 USD = 0.85 EUR
      this.eurAmount = (parseFloat(this.usdAmount) * exchangeRate).toFixed(2);
    }
  }
};
</script>
