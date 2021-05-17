import Vue from "vue";
import Vuex from "vuex";
import http from '@/util/http-common';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      
    ],
  },
  getters: {
    getList(state) {
      return state.todos;
    }
  },
  mutations: {
    
    GET_TODO(state) {
      http
        .get('/todo/all')
        .then(({ data }) => {
          state.todos = data;
        })
        .catch(() => {
          console.log("에러 발생");
        })
    }
  },
  actions: {
    // 등록
    addTodo(context, todoItem) {
      http
      .post('/todo/insert', {
        title: todoItem.title,
        success: false,
      })
      .then(() => {
        console.log("등록성공");
        context.commit('GET_TODO');
      })
      .catch(() => {
        console.log("등록실패");
      })
    },
    // 초기 값 가져오기
    getTodo(context) {
      context.commit('GET_TODO');
    },
    // 삭제
    deleteTodo(context, id) {
      http
        .delete(`/todo/delete/${id}`)
        .then(() => {
          console.log("삭제성공");
          context.commit('GET_TODO');
        })
        .catch(() => {
          console.log("삭제실패");
        })
    },
    // 완료
    finishTodo(context, id) {
      http
        .put(`/todo/finish/${id}`)
        .then(() => {
          console.log("완료성공");
          context.commit('GET_TODO');
        })
        .catch(() => {
          console.log("완료실패");
        })
    },
  },
});
