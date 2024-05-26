import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  loadStudentsAsync: async (_, { params }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/company/students', { params })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  createStudentAsync: async (_, { data }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/company/students', data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  showStudentAsync: async (_, { uuid }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/company/students/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  updateStudentAsync: async (_, { uuid, data }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/company/students/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  deleteStudentAsync: async (_, { uuid }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/company/students/${uuid}`)
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
