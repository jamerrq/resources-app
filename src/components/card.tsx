import { giveMeTheColors } from '../data/colors'

export default function Card (item: Item, index: string): JSX.Element {
  return (
    <div key={index} className='bg-[#DAC0A3] border-2 border-[#102C57] rounded-xl p-3 shadow-sm shadow-black'>
      <a href={item.url} target="_blank" rel="noreferrer">
        <div className="w-full bg-[#102C57] rounded p-1 text-[#F8F0E5] shadow-sm shadow-black opacity-90 hover:opacity-100">
          <h2 className="font-bold">{item.name}</h2>
        </div>
      </a>
      <br />
      <p>{item.description}</p>
      <br />
      <div className="flex gap-1 flex-wrap">
        {
          item.tags?.sort().map((tag, index) => {
            const [color, textColor] = giveMeTheColors(tag)
            return (
              <span key={index} style={{
                // backgroundColor: tagsColor[tag] ?? '#000',
                backgroundColor: color,
                color: textColor
              }} className="text-white font-bold p-1.5 text-xs rounded-xl border-2 border-black shadow-sm shadow-black">
                {tag}
              </span>
            )
          })
        }
      </div>
    </div>
  )
}
