import {login} from '@/api/user.js'
export default {
  namespaced: true,
  state: {
    token:'',
  },
  mutations: {
    setToken(state,payload){
      state.token=payload
    }
  },
  actions: {
   async getToken(context,payload){
      // console.log(payload);
      const res = await login(payload)
      context.commit('setToken',res.data)
    }
  }
}
