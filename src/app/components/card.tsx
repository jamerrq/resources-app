import { Item, Tag } from "./table";

const tagsColor: { [key: string]: string; } = {
    "html": "#e34c26",
    "css": "#563d7c",
    "javascript": "#f1e05a",
    "json": "#292929",
    "svg": "#ff9900",
    "google": "#4285f4",
    "png": "#ee0000",
    "design": "#ff4081",
    "styleguide": "#ff4081",
    "freecodecamp": "#0a0a23",
    "frontend": "#0a0a23",
    "backend": "#0a0a23",
    "tools": "#0a0a23",
    "icons": "#0a0a23"
};

const tagsTextColor: { [key: string]: string; } = {
    'javascript': '#000000',
    'google': '#000',
};

export default function Card(item: Item, index: string) {
    return (
        <div key={index} className='bg-[#DAC0A3] border-2 border-[#102C57] rounded-xl p-3 shadow-sm shadow-black select-none'>
            <a href={item.url} target="_blank" rel="noreferrer">
                <div className="w-full bg-[#102C57] rounded p-1 text-[#F8F0E5]">
                    <h2 className="font-bold">{item.name}</h2>
                </div>
            </a>
            <br />
            <p>{item.description}</p>
            <br />
            <div className="flex gap-1">
                {
                    item.tags.sort().map((tag, index) => {
                        return (
                            <span key={index} style={{
                                backgroundColor: tagsColor[tag],
                                color: tagsTextColor[tag]
                            }} className="text-white font-bold p-1.5 text-xs rounded-xl border-2 border-black shadow-sm shadow-black">
                                {tag}
                            </span>
                        );
                    })
                }
            </div>
        </div>
    );
}
