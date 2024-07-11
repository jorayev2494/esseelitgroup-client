import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  showStaticPageAsync: async (_, { slug }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/public/static-pages/static-pages/${slug}`)
        .then(resolve)
        .catch(reject)
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
