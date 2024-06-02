import httpClient from "@/services/http"

const state = {
  
}

const getters = {
  
}

const mutations = {
  
}

const actions = {
  loadProfileAsync: async () => {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/company/profile')
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  updateProfileAsync: async (_, { data }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/company/profile', data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  async changePasswordAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/company/profile/change-password`, data)
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
