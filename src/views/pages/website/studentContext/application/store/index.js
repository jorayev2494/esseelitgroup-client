import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  loadApplicationsAsync: async (_, { params }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/student/applications', { params })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  async loadStudentApplicationsAsync(_, { studentUuid, params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/student/applications/${studentUuid}/applications`, { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createApplicationAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/student/applications', data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showApplicationAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/student/applications/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async updateApplicationAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/student/applications/${uuid}`, data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteApplicationAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/student/applications/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async loadApplicationStatusesListAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/student/applications/statuses/list')
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
