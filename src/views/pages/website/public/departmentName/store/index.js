import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadDepartmentNameListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/departments/names/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },
  async showDepartmentNameAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/public/universities/departments/names/${uuid}`)
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
