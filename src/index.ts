/**
 * generates a color string in rgba notation
 * 
 * @example
 * rgba(0xd32e2d, 0.3)
 * // returns 'rgba(211, 46, 45, 0.3)'
 * @param rgb numeric color value (best to use hex notation)
 * @param a the alpha value, default 1
 * @return the rgba string representation of the given hex color
 */
export const rgba = (rgb: number, a: number = 1) => {
  let r = (rgb & 0xff0000) >> 16
  let g = (rgb & 0xff00) >> 8
  let b = rgb & 0xff

  return `rgba(${r}, ${g}, ${b}, ${a})`
}
