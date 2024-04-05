import httpClient from "@/services/http";

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadAliasListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/aliases/list', { params })
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

