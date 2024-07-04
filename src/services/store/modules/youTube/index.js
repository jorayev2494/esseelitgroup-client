import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadYouTubeListVideosAsync() {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/youtube/list_videos')
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
