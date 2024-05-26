import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  loadLanguageListAsync: async (_, { params }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/student/languages/list', { params })
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
