<template>
  <section id="task">
    <p>{{task.name}}</p>
  </section>
</template>

<script>
export default {
  name: "Task",
  props: ["task", "index"]
}
</script>

<style lang="stylus" scoped>
  @import '../*'

  section#tasks
    p
      padding 1vh 0
</style>



