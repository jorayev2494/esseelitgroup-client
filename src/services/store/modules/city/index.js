import httpClient from "@/services/http";

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadCityListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/universities/countries/cities/list', { params })
        .then(response => {
          return resolve(response);
        })
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

