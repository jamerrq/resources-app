'use client';

type Options = {
    tags: string[];
    setTags: (tags: string[]) => void;
    search: string;
    setSearch: (search: string) => void;
    sort: string;
    setSort: (sort: string) => void;
    sortDirection: boolean;
    setSortDirection: (sortDirection: boolean) => void;
};

export default function Filters(options: Options) {
    const { tags, setTags, search, setSearch, sort, setSort, sortDirection, setSortDirection } = options;

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    };

    const handleSortDirection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortDirection(event.target.checked);
    };

    const handleTag = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tag = event.target.value;
        if (event.target.checked) {
            setTags([...tags, tag]);
        } else {
            setTags(tags.filter((t) => t !== tag));
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                <input
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
}
