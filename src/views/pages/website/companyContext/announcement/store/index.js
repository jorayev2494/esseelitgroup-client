import httpClient from "@/services/http"


const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadAnnouncementsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/company/announcements/announcements', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadAnnouncementListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/company/announcements/announcements/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async viewAnnouncementAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/company/announcements/announcements/view/${uuid}`)
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
