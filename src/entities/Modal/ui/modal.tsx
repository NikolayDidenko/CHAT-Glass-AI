import Modal from "react-modal"
import { useState } from "react";
import './ModalStyle.css'
import { ModalList } from "../ModalList";



export function ModalBlock() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('1')

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal} className="flex w-full p-[10px] rounded-[50px] items-center gap-x-[10px] border-2 border-[#F6F6F6] hover:bg-[#4E59FF] hover:text-white transition-colors"><img src="/settings.svg" alt="Settings" />Settings</button>
            <Modal closeTimeoutMS={200} isOpen={modalIsOpen} onRequestClose={closeModal} className={`bg-black px-5 py-[10px] rounded-[10px] text-white absolute left-0 right-0 m-auto top-0 bottom-0 max-w-[700px] max-h-[500px] transition-opacity ${modalIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center justify-between border-b-[2px] border-white">
                    <h2 className="text-[30px]">Settings</h2>
                    <button onClick={closeModal} className="cursor-pointer"><img src="/x.svg" alt="" /></button>
                </div>
                <div className="flex gap-x-[30px]">
                    <div className="min-w-[190px] mt-[30px]">
                        <nav>
                            <ul className="flex flex-col gap-y-[5px]">
                                {ModalList.map((e) => (
                                    <li onClick={() => setActiveTab(e.id)} key={e.id} className={`${activeTab == e.id ? 'text-black bg-white' : 'text-white bg-black'} p-[5px] rounded-[10px] flex items-center gap-x-[5px] cursor-pointer transition-colors`}>
                                        <img className={`${activeTab == e.id ? 'invert-100' : ''} transition-colors`} src={e.image} alt="" />
                                        {e.title}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="mt-[10px]">
                        {ModalList.find(tab => tab.id === activeTab)?.content}
                    </div>
                </div>
            </Modal>
        </div>
    )
}
