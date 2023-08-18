import Table from "./components/table";

export default function Home() {
    return (
        <main className="flex h-screen flex-col items-center p-12">
            <h1 className="text-xl font-bold">Web Full Stack Resources</h1>
            <span className="flex text-xs mb-3">
                a collection of resources for web full stack development
            </span>
            <Table />
        </main>
    );
}
