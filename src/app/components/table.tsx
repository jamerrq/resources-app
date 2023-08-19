import { data } from '../../data/data.json';
import Card from './card';

export type Tag = typeof data[number]['tags'][number];

export type Item = {
    name: string;
    description: string;
    tags: Tag[];
    url: string;
};

export default function Table() {
    return (
        <div className="flex flex-col gap-2 ">
            {
                data.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => {
                    return <Card key={index} {...item} />;
                })
            }
        </div>
    );
};
