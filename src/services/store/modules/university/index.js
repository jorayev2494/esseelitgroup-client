import httpClient from '@/services/http'

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadUniversitiesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities')
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showUniversityAsync(_, uuid) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/public/universities/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
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

