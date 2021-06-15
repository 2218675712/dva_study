import React from 'react';
import {connect} from 'dva';

const IndexPage = (props) => {
  const handleSetName = () => {
    // 要先写命名空间在写函数
    props.dispatch({
      type: 'indexTest/setName',
      data: {
        name: '张三'
      }
    })
  }
  const handleSetNameAsync = () => {
    // 要先写命名空间在写函数
    props.dispatch({
      type: 'indexTest/setNameAsync',
      data: {
        name: '张三'
      }
    })
  }
  return <div>
    <h1>我是首页</h1>
    {props.name}
    <button onClick={handleSetName}>setName</button>
    <button onClick={handleSetNameAsync}>setNameAsync</button>
  </div>
};

IndexPage.propTypes = {};
const mapStateToProps = state => {
  return {
    msg: '珠海',
    name: state.indexTest.name
  }
}
export default connect(mapStateToProps)(IndexPage);
