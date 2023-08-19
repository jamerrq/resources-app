import Table from "./components/table";


export default function Home() {
    return (
        <main className="flex h-full w-full flex-col items-center p-12">
            <h1 className="w-full text-2xl font-bold text-[#352F44]">Web Full Stack Resources</h1>
            <span className="w-full flex text-xs mb-3 text-[#272829]">
                a collection of resources for web full stack development
            </span>
            <Table />
        </main>
    );
}
