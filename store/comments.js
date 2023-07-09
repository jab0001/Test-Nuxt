export const state = () => ({
  comments: [],
});

export const mutations = {
  setComments(state, comments) {
    state.comments = comments;
  },
};

export const actions = {
  async fetch({ commit }) {
    const comments = await this.$axios.$get("/comments");
    commit("setComments", comments);
  },
};

export const getters = {
  comments(state) {
    return state.comments;
  },
};
