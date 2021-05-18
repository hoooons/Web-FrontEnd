<template>
    <b-container>
        <b-form >
      <b-form-group class="m-5"
        id="input-group-1"
        label="제목"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          placeholder="제목을 입력해주세요."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="m-5" id="input-group-2" label="글쓴이" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.writer"
          placeholder="이름을 입력해주세요."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="m-5" id="input-group-3" label="질문내용" label-for="input-3">
        <b-form-textarea
        id="input-3"
        v-model="form.content"
        placeholder="질문내용을 입력해주세요."
        rows="8"
        max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button pill @click="insert" variant="primary">등록</b-button>
      <b-button pill @click="reset" variant="danger">초기화</b-button>
      <b-button pill variant="warning" @click="mvBack">목록보기</b-button> 
    </b-form>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
       form: {
          title: '',
          writer: '',
          content: '',
        },
      }
    },
    methods: {
     insert() {
         const qna = {
             title: this.form.title,
             writer: this.form.writer,
             content: this.form.content,
         }
        console.log(qna);
        this.$store.dispatch('insertQnA',qna);
        this.form.title = '';
        this.form.name = '';
        this.form.content = '';
        this.$router.push('/about');
      },
      reset() {
        this.form.title = '';
        this.form.name = '';
        this.form.content = '';
      },
      mvBack(){
            this.$router.push('/about');
        },
    }
  }
</script>