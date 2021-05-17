<template>
  <div>
      <input type="text" v-model.trim="todoTitle" @keypress.enter="addTodo">
      <button @click="addTodo">추가</button>
  </div>
</template>

<script>
export default {
    name: 'TodoForm',
    data(){
        return{
            todoTitle:'',
        }
    },
    methods:{
        addTodo(){
            const todoItem = {
                title: this.todoTitle,
                success: false,
            }
            if(this.todoTitle){
                this.$store.dispatch('addTodo',todoItem);
            }
            this.todoTitle = '';
        },
    }
}
</script>

<style>

</style>