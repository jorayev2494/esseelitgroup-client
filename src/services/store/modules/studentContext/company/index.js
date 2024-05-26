const keyName = 'company';

const getCompany = () => {
  const company = localStorage.getItem(keyName);

  return company !== null ? state.company = JSON.parse(company) : null;
}

const state = {
  keyName,
  company: null,
}

const getters = {
  getCompany: state => state.company ?? getCompany(),
  getKeyName: state => state.keyName,
}

const mutations = {
  setCompany: (state, payload) => {
    state.company = payload;
    localStorage.setItem(keyName, JSON.stringify(payload));
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
