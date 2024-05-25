import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {
  
}

const actions = {
  async loadDocumentListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/public/documents/documents/list', { params })
        .then(resolve)
        .catch(reject);
    })
  },

  async downloadDocumentAsync(_, { uuid, name }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/public/documents/documents/download/${uuid}`, { responseType: 'arraybuffer', })
        .then(response => {
          console.log('Name: ', name)
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', name)
          document.body.appendChild(link)
          link.click()

          return resolve(response)
        })
        .catch(reject);
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
