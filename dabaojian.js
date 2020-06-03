function baojian1(money) {
  return money >= 200 ? '至尊' : '基本'
}

function baojian2(money) {
  return money >= 1000 ? '双人' : '单人'
}

module.exports = {
  baojian1, baojian2
}
