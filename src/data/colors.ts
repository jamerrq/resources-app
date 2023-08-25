import seedrandom from 'seedrandom'
import type { RGB, HEX } from '@/types'

function generateRandomColorFromText (tagText: string): RGB {
  const rng = seedrandom(tagText)
  const r = Math.floor(rng() * 255)
  const g = Math.floor(rng() * 255)
  const b = Math.floor(rng() * 255)
  return [r, g, b]
}

const RED = 0.2126
const GREEN = 0.7152
const BLUE = 0.0722

const GAMMA = 2.4

function luminance (...rbg: RGB): number {
  const a = [...rbg].map((v) => {
    v /= 255
    return v <= 0.03928
      ? v / 12.92
      : Math.pow((v + 0.055) / 1.055, GAMMA)
  })
  return a[0] * RED + a[1] * GREEN + a[2] * BLUE
}

function contrast (rgb1: RGB, rgb2: RGB): number {
  const lum1 = luminance(...rgb1)
  const lum2 = luminance(...rgb2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  return (brightest + 0.05) / (darkest + 0.05)
}

function hexToRgb (hex: string): RGB {
  const m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i) as string[]
  return [
    parseInt(m[1], 16),
    parseInt(m[2], 16),
    parseInt(m[3], 16)
  ]
}

function textColorFromColor (hex: string): HEX {
  const rgb = hexToRgb(hex)
  const contrastRatio = contrast(rgb, [0, 0, 0])
  if (contrastRatio > 4.5) {
    return '#000000'
  }
  return '#ffffff'
}

function rgbToHex (rgb: RGB): HEX {
  return '#' + rgb.map((x) => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('') as HEX
}

export function giveMeTheColors (text: string): [HEX, HEX] {
  const rgbValues = generateRandomColorFromText(text)
  const hexColor = rgbToHex(rgbValues)
  const textColor = textColorFromColor(hexColor)
  return [hexColor, textColor]
}
