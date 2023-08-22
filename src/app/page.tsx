import Table from '../components/table'
import Modal from '../components/modal'

export default function Home (): JSX.Element {
  return (
    <main className="flex h-full min-w-full flex-col items-center p-5">
      <Modal />
      <div className="self-center">
        <h1 className="w-full text-2xl font-bold text-[#352F44] self-center">{'<'}Web Full Stack Resources{'/>'}</h1>
        <span className="w-full flex text-xs mb-3 text-[#272829]">
          a collection of resources for web full stack development
        </span>
      </div>
      <Table />
    </main>
  )
};
