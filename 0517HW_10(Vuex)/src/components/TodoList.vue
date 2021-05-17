<template>
  <div>
      <todo-list-item v-for="(todo,idx) in todos" :key="idx" :todo="todo" />
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
    name: 'TodoList',
    components: { TodoListItem },
    computed:{
        todos(){
            return this.$store.getters.getList;
        },
    },
    created(){
        this.$store.dispatch('getTodo');
    },
};
</script>

<style>

</style>