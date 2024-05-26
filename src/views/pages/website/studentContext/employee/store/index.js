import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  loadEmployeesAsync: async (_, { params }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/company/employees', { params })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  createEmployeeAsync: async (_, { data }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/company/employees', data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  showEmployeeAsync: async (_, { uuid }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/company/employees/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  updateEmployeeAsync: async (_, { uuid, data }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/company/employees/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  deleteEmployeeAsync: async (_, { uuid }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/company/employees/${uuid}`)
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
