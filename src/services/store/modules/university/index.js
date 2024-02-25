import httpClient from '@/services/http'

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadUniversityListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/universities/list', { params })
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showUniversityAsync(_, uuid) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/public/universities/universities/${uuid}`)
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

