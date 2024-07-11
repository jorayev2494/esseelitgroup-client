import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadContestsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/student/contests/contests', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showContestAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/student/contests/contests/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showContestWonStudentAsync(_, { companyUuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/student/contests/contests/${companyUuid}/students`)
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
