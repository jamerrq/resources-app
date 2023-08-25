'use client'

import { type Item } from '@/types'
import data from '@/data/data.json'
import Card from './card'
import { useMemo, useState } from 'react'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { giveMeTheColors } from '@/data/colors'

const rawData: Item[] = data.data
const allTags = new Set(rawData.reduce((acc: string[], val) =>
  acc.concat(val.tags), []))

export default function Table (): JSX.Element {
  const [search, setSearch] = useState<string | null>(null)
  const [tags, setTags] = useState<Set<string>>(new Set())
  const [showTags, setShowTags] = useState<boolean>(false)

  const handleSearch = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value)
  }

  const handleCheck = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value, checked } = e.currentTarget
    if (checked) {
      setTags((prev) => new Set(prev.add(value)))
    } else {
      setTags((prev) => {
        const next = new Set(prev)
        next.delete(value)
        return next
      })
    }
  }

  const filteredData = useMemo(() => {
    // if (!search) return data;
    return rawData.filter((item) => {
      // Filter by tags
      if (tags.size > 0) {
        if (!item.tags.some((tag) => tags.has(tag))) return false
      }
      // Filter by search
      if (search === null) return true
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [search, tags])

  const orderedData = useMemo(() => {
    return filteredData.sort((a, b) => a.name.localeCompare(b.name))
  }, [filteredData])

  const customIcon = showTags
    ? <IconEyeOff stroke={2.5} style={{ display: 'inline-block' }}
      size={18} />
    : <IconEye stroke={2.5} style={{ display: 'inline-block' }} size={18} />

  const [tagsButtonColor, tagsButtonTextColor] = giveMeTheColors('tags')

  return (
    <div className="flex flex-col gap-2 min-w-full">
      <div className="flex gap-2 text-sm px-2 flex-col">
        <div className="flex flex-row gap-2 justify-around max-w-lg self-center">
          <input type="text" className='self-center rounded text-center py-1 w-80 border-2 border-slate'
            placeholder='search...' onChange={handleSearch} />
          <button className="py-1 px-2 rounded border-2 border-black select-none font-bold"
            onClick={() => { setShowTags(state => !state) }}
            style={{ backgroundColor: tagsButtonColor, color: tagsButtonTextColor }}
          >{customIcon} TAGS</button>
        </div>
        <div className="grid grid-cols-4 self-center overflow-hidden transition-all">
          {showTags && (
            Array.from(allTags).sort().map((tag, index) => {
              return (
                <label key={index} className="flex items-center gap-1 mr-1">
                  <input type="checkbox" value={tag} onChange={handleCheck} />
                  {tag}
                </label>
              )
            }))
          }
        </div>
      </div>
      <span className='text-xs self-center text-red-900 font-bold'>
        {orderedData.length} results
      </span>
      <div className="grid gap-2 lg:grid-cols-2">
        {
          orderedData.map((item, index) => {
            return <Card key={index} {...item} />
          })
        }
      </div>
    </div>
  )
};
