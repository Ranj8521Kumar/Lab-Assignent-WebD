<template>
  <div>
    <h1>Stopwatch</h1>
    <p>{{ formatTime }}</p>
    <div>
      <button @click="startTimer" :disabled="isRunning">Start</button>
      <button @click="pauseTimer" :disabled="!isRunning">Pause</button>
      <button @click="resetTimer">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: null,
      currentTime: 0,
      timerId: null,
      isRunning: false
    };
  },
  computed: {
    formatTime() {
      const minutes = Math.floor(this.currentTime / 60).toString().padStart(2, '0');
      const seconds = (this.currentTime % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    }
  },
  methods: {
    startTimer() {
      if (!this.isRunning) {
        this.startTime = Date.now() - this.currentTime * 1000;
        this.timerId = setInterval(() => {
          this.currentTime = Math.floor((Date.now() - this.startTime) / 1000);
        }, 1000);
        this.isRunning = true;
      }
    },
    pauseTimer() {
      clearInterval(this.timerId);
      this.isRunning = false;
    },
    resetTimer() {
      clearInterval(this.timerId);
      this.isRunning = false;
      this.currentTime = 0;
    }
  }
};
</script>

<style scoped>
button {
  margin-right: 10px;
}
</style>