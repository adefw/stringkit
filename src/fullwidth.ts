/**
 * @module FullWidth String Transform Kit
 */

/**
 * Transform string to FullWidth
 */
export function toFullWidth(str: string): string {
  let output = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code === 32) {
      output += String.fromCharCode(12288)
    } else if (code < 127) {
      output += String.fromCharCode(code + 65248)
    } else {
      output += ''
    }
  }
  return output
}

/**
 * Transform FullWidth String to HalfWidth
 */
export function toHalfWidth(str: string): string {
  let output = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code === 12288) {
      output += String.fromCharCode(32)
      continue
    }
    if (code > 65280 && code < 65375) {
      output += String.fromCharCode(code - 65248)
    } else {
      output += String.fromCharCode(code)
    }
  }
  return output
}

export function isFullWidth(str: string, global: boolean = true): boolean {
  const matcher = new RegExp('[\uff00-\uffff]', global ? 'g' : '')
  const result = str.match(matcher)

  if (result) {
    return global ? result.length === str.length : true
  } else {
    return false
  }
}

export function hasFullWidth(str: string): boolean {
  return isFullWidth(str, false)
}
