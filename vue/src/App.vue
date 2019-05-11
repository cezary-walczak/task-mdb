<template>
  <main id="app">
    
    <Tasks :tasks="tasks" 
      @createNewTask="createNewTask"
      @removeLastTask="removeLastTask"
      @purgeTasksArray="purgeTasksArray"
    />
    <div class="errors" v-if="errors != null">{{errors}}</div>
  </main>
</template>

<script>
import axios from 'axios'
import Tasks from './components/Tasks'

export default {
  name: 'app',
  components: {
    Tasks
  },
  data() {
    return {
      tasks: [],
      errors: null,
      currentTask: 0,
    }
  },
  methods: {
    fetchTasks() {
      axios.get('https://task-mdb.cezary-walczak.now.sh/api/tasks')
        .then((response) => { this.tasks = response.data.result })
        .catch((error) => { this.errors = error })
    },
    createNewTask(payload) {
      axios.post('https://task-mdb.cezary-walczak.now.sh/api/tasks', { name: payload.newTask })
        .then((response) => { console.log(payload) })
        .catch((error) => { this.errors = error })
    },
    removeLastTask() {
      axios.delete(`https://task-mdb.cezary-walczak.now.sh/api/tasks/${ this.tasks[this.tasks.length-1]._id }`)
        .then((response) => { this.fetchTasks() })
        .catch((error) => { this.errors = error })
    },
    purgeTasksArray() {
      axios.delete(`https://task-mdb.cezary-walczak.now.sh/api/tasks`)
        .then((response) => { this.fetchTasks() })
        .catch((error) => { this.errors = error })
    }
  },
  created() {
    this.fetchTasks()
  }
}
</script>

<style lang="stylus">
  @import '*'

  #app
    text-align center
</style>
