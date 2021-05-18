<template>
  <b-container>
      <div style="line-height:100px; text-align:center; border:1px solid black; border-radius:50px; height:300px;">
          제목 : {{detail.title}}<br>
          글쓴이 : {{detail.writer}}<br>
          내용 :  {{detail.content}}<br>
      </div>
      <b-button pill class="mt-5" variant="info" @click="mvUpdate">수정하기</b-button>
      <b-button pill class="mt-5" variant="danger" @click="remove">삭제하기</b-button>
      <b-button pill class="mt-5" variant="warning" @click="mvBack">목록보기</b-button>
  </b-container>
</template>

<script>
  export default {
    data(){
        return{
            id:0,
        }
    },
    methods:{
        mvBack(){
            this.$router.push('/about');
        },
        remove(){
            this.$store.dispatch('removeQnA',this.id);
            this.$router.push('/about');
        },
        mvUpdate(){
            this.$router.push({name:'update',params:{id:this.id}});
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.$store.dispatch('detailQnA',this.id);
    },
    computed:{
        detail(){
            return this.$store.state.detail;
        }
    }
  }
</script>