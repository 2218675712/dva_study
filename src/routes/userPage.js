import React from 'react';
import {Link} from 'dva/router';
import {connect} from 'dva';

const userPage = (props) => {

  const ToHome=()=>{
    props.history.push('/')
  }
  return <div>
    <h1>我是用户页</h1>
    <Link to={'/'}>首页</Link>
    <button onClick={ToHome}>首页</button>
  </div>
};

userPage.propTypes = {};

export default connect()(userPage);
