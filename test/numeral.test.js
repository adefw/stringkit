import { ArabicToChinese }  from '../src/index'

describe('ArabicToChinese', () => {
  test('single', () => {
    expect(ArabicToChinese(9)).toBe('九')
    expect(ArabicToChinese(4, { capital: true })).toBe('肆')
  })
  test('multi', () => {
    expect(ArabicToChinese(456, { capital: true })).toBe('肆伍陆')
    expect(ArabicToChinese(456, { capital: false })).toBe('四五六')
  })
  test('not a number', () => {
    expect(ArabicToChinese('xf95')).toBe('')
  })
})
