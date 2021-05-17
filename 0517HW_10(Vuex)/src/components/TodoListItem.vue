<template>
  <div style="border:1px solid black; width:300px; height:50px; text-align:center; margin:20px auto; line-height:50px;">
    {{todo.id}} / {{todo.title}}
      / <span style="color:red"> {{todo.success}} </span>
      <button v-on:click="fin(todo.id)">완료</button>
      <button v-on:click="del(todo.id)">삭제</button>
  </div>
</template>

<script>
export default {
    name: 'TodoListItem',
    props: ['todo','todo.id'],
    methods:{
      del(id){
        this.$store.dispatch('deleteTodo',id);
      },
      fin(id){
        console.log(1);
        this.$store.dispatch('finishTodo',id);
      },
    }
}
</script>

<style>

</style>