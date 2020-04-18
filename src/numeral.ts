/**
 * @module Numeral String Kit
 */

const ChineseNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
const ChineseCapitalNumber = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾']

export function ArabicToChinese(number: number, options?: { capital: false }): string {
  const num = Number(number)
  if (Number.isNaN(num)) {
    return ''
  } else {
    const nums = options && options.capital ? ChineseCapitalNumber : ChineseNumber
    if (num < 10) {
      return nums[num]
    } else {
      return num.toString().split('')
        .map((item: string) => nums[+item]).join('')
    }
  }

}
