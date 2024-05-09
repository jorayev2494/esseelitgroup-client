import httpClient from '@/services/http'

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadUniversitiesAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/universities', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadUniversityListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/universities/list', { params })
        .then(resolve)
        .catch(error => reject(error));
    })
  },

  async showUniversityAsync(_, uuid) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/public/universities/universities/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async searchUniversityAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/universities/search', { params })
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
