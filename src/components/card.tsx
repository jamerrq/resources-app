import type { Item } from "./table";

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
    "frontend": "#279EFF",
    "backend": "#0a0a23",
    "tools": "#0a0a23",
    "icons": "#0a0a23",
    "react": "#61dafb",
    "node": "#68a063",
    "fonts": "#0a0a23",
    "browser": "#0a0a23",
    "carousels": "#ff4081",
    "tailwind": "#06b6d4",
    "interviews": "#A8DF8E",
    "skills": "#5B9A8B",
    "compiler": "#79155B",
    "editor": "#614BC3",
    "ide": "#FFF3DA",
    "interpreter": "#33BBC5",
    "repl": "#96B6C5",
    "images": "#C70039",
    "python": "#FFC300",
    "sql": "#FF5733",
    "figma": "#F24E1E",
    "api": "#FFC300",
    "testing": "#C8E4B2",
};

const tagsTextColor: { [key: string]: string; } = {
    'javascript': '#000000',
    'google': '#000',
    'react': '#000',
    'tailwind': '#000',
    'interviews': '#000',
    'ide': '#000',
    'interpreter': '#000',
    'repl': '#000',
    'skills': '#000',
    'frontend': '#000',
    'api': '#000',
    'testing': '#000',
};

export default function Card(item: Item, index: string) {
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
            <div className="flex gap-1">
                {
                    item.tags?.sort().map((tag, index) => {
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
