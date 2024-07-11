import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadDepartmentListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/departments/list', { params })
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },
  async loadDepartmentsAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/departments', { params })
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },
  async showDepartmentAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/public/universities/departments/show/${uuid}`)
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
