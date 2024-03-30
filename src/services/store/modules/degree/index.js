import httpClient from "@/services/http";

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadDegreeListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/degrees/list', { params })
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

