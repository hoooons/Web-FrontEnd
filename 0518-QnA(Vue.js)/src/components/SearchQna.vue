<template>
  <div>
    <b-form >
        <select v-model="searchData.key">
            <option value="title">제목</option>
            <option value="writer">작성자</option>
            <!-- <option value="">내용</option> -->
        </select>
        <input type="text" v-model="searchData.word"/>
      <button type="button" @click="search" variant="primary">Submit</button>
    </b-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            searchData:{
                key: 'title',
                word: ''
            }
        }
    },
    methods: {
        search() {
            this.$store.dispatch('searchQna',this.searchData)
        }
    }
    
}
</script>

<style>

</style>