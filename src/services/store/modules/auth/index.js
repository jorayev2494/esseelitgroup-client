const keyName = 'auth_data'

const getAuthData = () => {
  const authData = localStorage.getItem(keyName);

  return authData !== null ? JSON.parse(authData) : null;
}

const getWhoAuthenticated = () => localStorage.getItem('who');

const state = {
  isAuthenticated: getAuthData(),
  keyName,
}

const getters = {
  getIsAuthenticated: state => state.isAuthenticated ??= getAuthData(),
  getWhoAuthenticated: () => getWhoAuthenticated(),
  getWhoIsAuthenticated: state => types => state.isAuthenticated && types.includes(getWhoAuthenticated()),
}

const mutations = {

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

