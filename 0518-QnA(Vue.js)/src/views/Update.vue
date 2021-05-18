<template>
  <b-container>
      <div style="line-height:100px; text-align:center; border:1px solid black; border-radius:50px; height:300px;">
          <label style="width:75px; display:inline-block;" for="title"> 제목 : </label><input id="title" v-model="title" style="line-height:25px;" ><br>
          <label style="width:75px; display:inline-block;" for="writer"> 글쓴이 : </label><input id="writer" v-model="writer" style="line-height:25px;" ><br>
          <label style="width:75px; display:inline-block;" for="content"> 내용 : </label><input id="content" v-model="content" style="line-height:25px;" ><br>
      </div>
      <b-button pill class="mt-5" variant="info" @click="update">수정하기</b-button>
      <b-button pill class="mt-5" variant="secondary" @click="back">돌아가기</b-button>
      <b-button pill class="mt-5" variant="warning" @click="mvBack">목록보기</b-button>
  </b-container>
</template>


<script>
  export default {
    data(){
        return{
            id:0,
            title:'',
            writer:'',
            content:'',
        }
    },
    methods:{
        mvBack(){
            this.$router.push('/about');
        },
        back(){
            this.$router.push({name:'mvDetail',params:{id:this.id}});
        },
        update(){
            const qna = {
                id: this.id,
                title: this.title,
                writer: this.writer,
                content: this.content,
            }
            this.$store.dispatch('updateQnA',qna);
            this.$router.push('/about');
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.$store.dispatch('detailQnA',this.id);

        const item = this.$store.state.detail;
        this.title = item.title;
        this.writer = item.writer;
        this.content =  item.content;
    },
    computed:{
        detail(){
            return this.$store.state.detail;
        }
    }
  }
</script>