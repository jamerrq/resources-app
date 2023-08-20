'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';


export default function CustomModal() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <div>
            <button onClick={openModal} className="absolute top-0 right-0 mt-3 mr-3">
                <BsFillInfoCircleFill />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    content: {
                        backgroundColor: '#F3FDE8', // Color de fondo
                        width: 'fit-content', // Ancho personalizado
                        height: 'fit-content', // Altura personalizada
                        margin: 'auto', // Centra el modal horizontalmente
                    },
                }}
            >
                <div className='flex flex-col items-center select-none w-fit'>
                    <h2 id="modal-modal-title" className="text-2xl font-bold text-[#352F44]">{"<"}Web Full Stack Resources{"/>"}</h2>
                    <br />
                    <span className="text-sm">
                        This is a collection of resources for web full stack development. It is a work in progress, so feel free to <a href="https://github.com/jamerrq/resources-app" className='text-blue-600' target='_blank'>contribute</a>.
                    </span>
                    <br />
                    <h3>- Created with -</h3>
                    <ul className="flex flex-row gap-3">
                        <li>
                            <a href="https://nextjs.org/" target="_blank">
                                <SiNextdotjs title="Next JS" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.typescriptlang.org/" target="_blank">
                                <SiTypescript title="TypeScript" color="#3178C6" />
                            </a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" target='_blank'>
                                <SiTailwindcss title="Tailwind CSS" color="#38BDF8" />
                            </a>
                        </li>
                    </ul>
                    <br />
                    <span className='text-sm'>
                        Developed with 💕 by <a href="https://github.com/jamerrq" className='text-blue-600 font-bold' target='_blank'>@jamerrq</a>
                    </span>
                    <button onClick={closeModal} className="close-modal-button absolute top-1 right-1 ">
                        <AiFillCloseCircle color="red" fontSize="1.2em" />
                    </button>
                </div>
            </Modal >
        </div >
    );
}
