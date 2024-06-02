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
      return httpClient.get('/student/profile')
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  updateProfileAsync: async (_, { data }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/student/profile', data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  async changePasswordAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/student/profile/change-password`, data)
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
