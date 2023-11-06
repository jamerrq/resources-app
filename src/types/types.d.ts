interface Item {
  id?: string
  name: string
  url: string
  description: string
  tags: (string)[]
}

type HEX = `#${string}`

type RGB = [number, number, number]
