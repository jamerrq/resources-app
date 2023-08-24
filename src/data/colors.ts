import seedrandom from 'seedrandom'

export function generateRandomColorFromText (tagText: string): string {
  const rng = seedrandom(tagText)
  const r = Math.floor(rng() * 255)
  const g = Math.floor(rng() * 255)
  const b = Math.floor(rng() * 255)
  // Now let's create a color string with enough contrast
  // against white
  if (r + g + b > 300) {
    return `rgb(${r - 100},${g - 100},${b - 100})`
  }
  return `rgb(${r},${g},${b})`
}
