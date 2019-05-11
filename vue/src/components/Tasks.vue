<template>
  <section id="tasks">

    <form @submit.prevent="clearForm">
      <input type="text" v-model="newTask" @focus="newTask = ''">
      <button @click="$emit('createNewTask', {newTask})">Dodaj</button>
      <button @click="$emit('removeLastTask')">Usuń</button>
      <button @click="$emit('purgeTasksArray')">Wyczyść</button>
    </form>

    <div v-for="task in tasks" :key="task._id">
      <Task :task="task"/>
    </div>

  </section>
</template>

<script>
import Task from './Task'

export default {
  name: "Tasks",
  components: {
    Task
  },
  props: ["tasks"],
  data() {
    return {
      newTask: 'Wpisz nazwę zadania:'
    }
  },
  methods: {
    clearForm() {
      this.newTask = 'Wpisz nazwę zadania:'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../*'

  section#tasks
    form
      margin 10vh 0 5vh 0
      input 
        padding 1vh 1vw
        margin 1vh 1vw
        border 1px solid color1
        transition all .5s
      button
        position relative
        overflow hidden
        padding 1vh 1vw
        margin 1vh 1vw
        border 1px solid color1
        background transparent
        cursor pointer
        &::before
          content ""
          position absolute 
          top 0
          left 0
          width 100%
          height 100%
          border-radius 1000px
          background rgba(color1, 0.1)
          z-index -1
          transform scale(0)
          transition all .5s
        &:hover 
          &::before
            transform scale(1.5)
</style>



