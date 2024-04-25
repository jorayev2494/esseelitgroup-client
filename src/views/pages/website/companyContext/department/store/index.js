import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  loadDepartmentsAsync: async (_, { params }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/company/departments', { params })
        .then(response => resolve(response))
        .catch(error => reject(error))
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
