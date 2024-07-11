import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadManagerListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/managers/managers/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showManagerAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/public/managers/managers/${uuid}`)
        .then(response => resolve(response))
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
