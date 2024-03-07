import httpClient from "@/services/http";

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadFacultyListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/faculties/list', { params })
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async loadFacultyShowAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/public/universities/faculties/${uuid}`)
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

