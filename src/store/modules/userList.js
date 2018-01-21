import { getList } from '@/api/userList'

const userList = {
  state: {
    list: []
  },

  mutations: {
    SET_LIST: (state, list) => {
      state.list = list
    }
  },

  actions: {
    // 获取用户列表
    GetList({ commit, state }) {
      console.log(this)
      return new Promise((resolve, reject) => {
        getList(state.token).then(response => {
          const data = response.data
          commit('SET_LIST', data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default userList
