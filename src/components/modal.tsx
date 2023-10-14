'use client'

import { useState } from 'react'
import Modal from 'react-modal'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { IconBrandNextjs, IconBrandTypescript, IconBrandTailwind, IconSquareRoundedXFilled, IconHeartFilled } from '@tabler/icons-react'

// Fonts
import { Bricolage_Grotesque } from 'next/font/google'
import localFont from 'next/font/local'

export const firaMono = localFont({ src: '../../public/fonts/Fira_Mono/FiraMono-Bold.ttf' })

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
            color: '#232946',
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
        <div className='flex flex-col items-center select-none w-fit p-1'>
          <h2 id="modal-modal-title" className="text-2xl font-bold text-[#352F44]">
            {'<'}Full Stack Resources{' />'}
          </h2>
          <span className="text-sm text-center m-2">
            This is a collection of resources for web full stack development.
            It is a work in continuous progress, so feel free to <a
              href="https://github.com/jamerrq/resources-app"
              className='text-blue-600 font-bold' target='_blank' rel="noreferrer">
              contribute
            </a>.
          </span>
          <span className="text-base text-center font-bold">
            Where these resources come from?
          </span>
          <span className="text-sm my-2 text-center">
            Mostly came from social media, blogs, and other websites; but there are also some great people there sharing their knowledge and vital information. Huge thanks to them, specially to Miguel Ángel Durán <a href="https://midu.dev/" target="_blank">
              <span className={`font-bold text-blue-600 ${firaMono.className}`}>@midu.dev</span>
            </a>
          </span>
          <br />
          <span className="text-sm">
            Latest update: <span className="font-bold">Sat 14-Oct-23</span>
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
          <span className='text-sm text-red-600 font-semibold'>
            Developed with <IconHeartFilled style={{ display: 'inline-block' }} /> by <a href="https://jamerrq-com.vercel.app/"
              className={`text-blue-600 ${firaMono.className}`} target='_blank' rel="noreferrer"> @jamerrq</a>
          </span>
          <button onClick={closeModal} className="absolute top-1 right-1 " aria-label='close the modal'>
            <IconSquareRoundedXFilled size={20} />
          </button>
        </div>
      </Modal >
    </div >
  )
}
