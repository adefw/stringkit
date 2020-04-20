import { toFullWidth, toHalfWidth, isFullWidth, hasFullWidth } from '../src/index'

describe('toFullwidth', () => {
  test('single', () => {
    expect(toFullWidth('1')).toBe('１')
    expect(toFullWidth('c')).toBe('ｃ')
    expect(toFullWidth('=')).toBe('＝')
    expect(toFullWidth('Ń')).toBe('')
  })
  test('multi', () => {
    expect(toFullWidth('2020938434')).toBe('２０２０９３８４３４')
  })
  test('mixed', () => {
    expect(toFullWidth('(9bC')).toBe('（９ｂＣ')
  })
  test('blank and empty', () => {
    expect(toFullWidth(' ')).toBe('　')
    expect(toFullWidth(' ')).not.toBe('')
    expect(toFullWidth(' ')).not.toBe(' ')
    expect(toFullWidth('')).toBe('')
  })
})

describe('toHalfWidth', () => {
  test('single', () => {
    expect(toHalfWidth('％')).toBe('%')
    expect(toHalfWidth('９')).toBe('9')
  })
  test('multi', () => {
    expect(toHalfWidth('ｈａｌｏ')).toBe('halo')
    expect(toHalfWidth('９３８４')).toBe('9384')
  })
  test('mixed', () => {
    expect(toHalfWidth('（９ｂＣ')).toBe('(9bC')
  })
  test('blank and empty', () => {
    expect(toHalfWidth(' ')).toBe(' ')
    expect(toHalfWidth('　')).toBe(' ')
    expect(toHalfWidth('')).toBe('')
  })
  test('barcode',()=>{
    // code-128
    expect(toHalfWidth('ＡＢＣ－ａｂｃ－１２３４')).toBe('ABC-abc-1234')
  })
})


test('isFullWidth', () => {
  expect(isFullWidth('９３８４')).toBe(true)
  expect(isFullWidth('aｈａｌ3')).toBe(false)
})

test('hasFullWidth', () => {
  expect(hasFullWidth('0ｈａ')).toBe(true)
  expect(hasFullWidth('0ha')).toBe(false)
})
