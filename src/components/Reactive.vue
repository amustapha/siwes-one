<template>
  <div>
    <h2>{{input}}</h2>
    <input type="text" v-model="input" />
    <button @click="something">Do something</button>
  </div>
</template>

<script>
export default {
  name: 'reactive',
  data: function () {
    return {
      input: null
    }
  },
  methods: {
    something () {
      window.alert(this.input)
    }
  }
}
</script>

<style scoped>

</style>
