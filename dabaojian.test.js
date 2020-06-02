const dabaojian = require('./dabaojian.js')
const { baojian1, baojian2 } = dabaojian

test('保健1方法-300元', () => {
  expect(baojian1(300)).toBe('至尊')
})

test('保健2方法-2000元', () => {
  expect(baojian2(2000)).toBe('双人')
})