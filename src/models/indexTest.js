export default {
  namespace: 'indexTest',
  state: {
    name: '小明'
  },
  reducers: {
    setName(state, payload) {

      return {...state, name: payload.data.name}
    }
  },
  // 处理异步的
  effects: {
    * setNameAsync({payLoad}, {put, call}) {
      yield put({
        type: 'setName', data: {
          name: '罗翔'
        }
      })
    }
  }
}
