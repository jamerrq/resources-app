'use client'

import { data } from '../data/data.json'
import Card from './card'
import { useMemo, useState } from 'react'

const allTags = new Set(data.reduce((acc: string[], val) =>
  acc.concat(val.tags), []))

export default function Table (): JSX.Element {
  const [search, setSearch] = useState<string | null>(null)
  const [tags, setTags] = useState<Set<string>>(new Set())

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
    return data.filter((item) => {
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

  return (
    <div className="flex flex-col gap-2 min-w-full">
      <div className="flex gap-2 text-sm px-2 flex-col">
        <input type="text" className='self-center rounded text-center py-1 w-80'
          placeholder='search...' onChange={handleSearch} />
        <div className="grid grid-cols-4 self-center">
          {
            Array.from(allTags).sort().map((tag, index) => {
              return (
                <label key={index} className="flex items-center gap-1 mr-1">
                  <input type="checkbox" value={tag} onChange={handleCheck} />
                  {tag}
                </label>
              )
            })
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
