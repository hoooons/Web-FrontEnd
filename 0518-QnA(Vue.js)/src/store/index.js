import Vue from "vue";
import Vuex from "vuex";
import http from '@/util/http-common';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    qnas: [],
    detail: [],
  },
  mutations: {
    LOAD_QNA(state, qnas) {
      state.qnas = qnas
    },
    DETAIL_QNA(state, qna) {
      state.detail = qna;
    }
  },
  actions: {
    loadQnA({ commit }) {
      http
        .get('/qna/all')
        .then(({ data }) => {
          commit('LOAD_QNA', data)
        })
        .catch(() => {
          alert('에러가 발생했습니다.');
        });
    },
    // 등록
    insertQnA(context, data) {
      http
        .post('/qna/insert', {
          title: data.title,
          writer: data.writer,
          content: data.content,
        })
        .then(({ data }) => {
          context.commit('LOAD_QNA', data);
          alert('등록 성공 !');
        })
        .catch(() => {
          alert('에러가 발생했습니다.');
        })
    },
    // 세부
    detailQnA(context, id) {
      http
        .get(`qna/detail/${id}`)
        .then(({ data }) => {
          context.commit('DETAIL_QNA', data);
        })
        .catch(() => {
          alert('에러가 발생했습니다.');
        })
    },
    // 삭제
    removeQnA(context, id) {
      http
        .delete(`qna/delete/${id}`)
        .then(({ data }) => {
          context.commit('LOAD_QNA', data);
        })
    },
    // 수정
    updateQnA(context, data) {
      http
        .put('/qna/update', {
          id: data.id,
          title: data.title,
          writer: data.writer,
          content: data.content,
        })
        .then(({ data }) => {
          context.commit('LOAD_QNA', data);
        })
    },
    searchQna({ commit }, searchData) {
      http
        .get('/qna/all')
        .then(({ data }) => {
          let key = searchData.key;
          let word = searchData.word;
          let searchQna =[]
          if (key === 'title') {
            searchQna = data.filter((qna) => {
              return qna.title.includes(word)
            })
          } else if (key === 'writer') {
            searchQna = data.filter((qna) => {
              return qna.writer.includes(word)
            })
          }
          commit('LOAD_QNA', searchQna)
        })
        .catch(() => {
          alert('에러가 발생했습니다.');
        });
    }
  },
  modules: {},
});
