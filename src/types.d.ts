export interface Item {
  id: string
  name: string
  url: string
  description: string
  tags: (string)[]
}

export type HEX = `#${string}`

export type RGB = [number, number, number]
