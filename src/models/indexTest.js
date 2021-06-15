import * as apis from '../services/example'

export default {
  namespace: 'indexTest',
  state: {
    name: '小明',
    cnodeData:{}
  },
  reducers: {
    setName(state, payload) {
      return {...state, name: payload.data.name}
    },
    setcnodeData(state, payload) {
      return {...state, cnodeData: payload.data}
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
    },
    * testCnode({payLoad}, {put, call}){
      // call是调用接口的
      // 可以第二个参数放参数
     let rel= yield call(apis.testCnode)
      if (rel.data){
        yield put({
          // 如果有数据,可以进行赋值
          type: 'setcnodeData', data: rel.data.data
        })
      }

    }
  }
}
