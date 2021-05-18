<template>
  <b-container>
    <search-qna></search-qna>
    <b-button pill variant="success" @click="mvInsert">등록</b-button>
    <b-table striped hover :items="qnas" @row-clicked="mvDetail"></b-table>
  </b-container>
</template>

<script>
import SearchQna from '../components/SearchQna.vue';
  export default {
    data() {
      return {
      }
    },
    components: {
      SearchQna

    },
    methods: {
      mvInsert(){
        this.$router.push('mvInsert');
      },
      mvDetail(data){
        this.$router.push({name:'mvDetail',params:{id:data.id}});
      }
    }, 
    created() {
      this.$store.dispatch('loadQnA');
    },
    computed: {
      qnas() {
        return this.$store.state.qnas
      }
    }
  }
</script>