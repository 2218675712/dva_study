module.exports = {
  'GET /api/mockdta': (req, res) => {
    console.log(req)
    res.send({
      msg: '登录成功'
    })
  }
}
