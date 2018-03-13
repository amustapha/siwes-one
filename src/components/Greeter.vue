<template>
  <div>
    <input type="text" placeholder="Name" v-model="currentPerson.name" />
    <input type="text" placeholder="Location" v-model="currentPerson.location" />
    <button
      @click="save">
      Save
    </button>
    <div v-for="person in greetedPeople">
      Good morning {{person.name}} from {{person.location}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'greeter',
  data: () => {
    return {
      greetedPeople: [],
      currentPerson: {}
    }
  },
  methods: {
    save () {
      this.greetedPeople.push(this.currentPerson)
      this.currentPerson = {}
    }
  }
}
</script>

<style scoped>

</style>
