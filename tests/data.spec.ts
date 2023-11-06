import { expect, test } from 'vitest'
import { data } from '../src/data/data.json'

test('No empty links', () => {
  const links = data.map((d) => d.url)
  const emptyLinks = links.filter((link) => link === '')
  expect(emptyLinks.length).toEqual(0)
})

test('No empty names', () => {
  const names = data.map((d) => d.name)
  const emptyNames = names.filter((name) => name === '')
  expect(emptyNames.length).toEqual(0)
})

test('No empty descriptions', () => {
  const descriptions = data.map((d) => d.description)
  const emptyDescriptions = descriptions.filter((description) => description === '')
  expect(emptyDescriptions.length).toEqual(0)
})

test('No empty tags', () => {
  const tags = data.map((d) => d.tags)
  const emptyTags = tags.filter((tag) => tag.length === 0)
  expect(emptyTags.length).toEqual(0)
})

test('No repeated tags', () => {
  const tags = data.map((d) => d.tags)
  const uniqueTags = [...new Set(tags)]
  expect(tags.length).toEqual(uniqueTags.length)
})

test('No repeated names', () => {
  const names = data.map((d) => d.name)
  const uniqueNames = [...new Set(names)]
  expect(names.length).toEqual(uniqueNames.length)
})

test('No repeated links', () => {
  const links = data.map((d) => d.url)
  const uniqueLinks = [...new Set(links)]
  expect(links.length).toEqual(uniqueLinks.length)
})
