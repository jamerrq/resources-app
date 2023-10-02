'use client'

import { useState } from 'react'
import Modal from 'react-modal'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { IconBrandNextjs, IconBrandTypescript, IconBrandTailwind, IconHeartHandshake, IconSquareRoundedXFilled } from '@tabler/icons-react'

// Font
import { Bricolage_Grotesque } from 'next/font/google'
const bricolageGrotesque = Bricolage_Grotesque({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function CustomModal (): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = (): void => {
    setModalIsOpen(true)
  }

  const closeModal = (): void => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal} className="absolute top-0 right-0 mt-3 mr-3" aria-label='open modal'>
        <BsFillInfoCircleFill />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          content: {
            backgroundColor: '#FFF6DC',
            maxWidth: '450px',
            height: 'fit-content',
            margin: 'auto',
            borderRadius: '10px',
            padding: '1rem',
            fontFamily: bricolageGrotesque.style.fontFamily
          }
        }}
        ariaHideApp={false}
      >
        <div className='flex flex-col items-center select-none w-fit'>
          <h2 id="modal-modal-title" className="text-2xl font-bold text-[#352F44]">
            {'<'}Web Full Stack Resources{' />'}
          </h2>
          <br />
          <span className="text-sm text-center">
            This is a collection of resources for web full stack development.
            It is a work in progress, so feel free to <a
              href="https://github.com/jamerrq/resources-app"
              className='text-blue-600 font-bold' target='_blank' rel="noreferrer">
              contribute
            </a>.
          </span>
          <br />
          <h3>- Created with -</h3>
          <ul className="flex flex-row gap-3">
            <li>
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer" title="NextJS">
                {/* <SiNextdotjs title="Next JS" /> */}
                <IconBrandNextjs />
              </a>
            </li>
            <li>
              <a href="https://www.typescriptlang.org/"
                target="_blank" rel="noreferrer" title="TypeScript">
                {/* <SiTypescript title="TypeScript" color="#3178C6" /> */}
                <IconBrandTypescript color="#3178C6" />
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com/"
                target='_blank' rel="noreferrer" title="Tailwind CSS">
                {/* <SiTailwindcss title="Tailwind CSS" color="#38BDF8" /> */}
                <IconBrandTailwind color="#38BDF8" fill="#38BDF8" />
              </a>
            </li>
          </ul>
          <br />
          <span className='text-sm'>
            Developed with <IconHeartHandshake style={{ display: 'inline-block' }} color='#BB2525' fill='#FFBFBF' /> by <a href="https://github.com/jamerrq"
              className='text-blue-600 font-bold' target='_blank' rel="noreferrer">@jamerrq</a>
          </span>
          <button onClick={closeModal} className="absolute top-1 right-1 " aria-label='close the modal'>
            <IconSquareRoundedXFilled size={20} />
          </button>
        </div>
      </Modal >
    </div >
  )
}
