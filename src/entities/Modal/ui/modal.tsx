import Modal from "react-modal"
import { useState } from "react";
import './ModalStyle.css'
import { ModalList } from "../ModalList";


export function ModalBlock() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null)

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal} className="flex w-full p-[10px] rounded-[50px] items-center gap-x-[10px] border-2 border-[#F6F6F6] hover:bg-[#4E59FF] hover:text-white transition-colors"><img src="/settings.svg" alt="Settings" />Settings</button>
            <Modal closeTimeoutMS={200} isOpen={modalIsOpen} onRequestClose={closeModal} className={`bg-black p-5 rounded-[10px] text-white absolute left-0 right-0 m-auto top-0 bottom-0 max-w-[700px] max-h-[500px] transition-opacity ${modalIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                <div>
                    <h2>Settings</h2>
                    <button onClick={closeModal}>X</button>
                </div>
                <div>
                    <div>
                        <nav>
                            <ul>
                                {ModalList.map((e) => (
                                    <li onClick={() => setActiveTab(e.id)} key={e.id} className={`${activeTab == e.id ? 'text-black bg-white' : 'text-white bg-black'} p-[5px] rounded-[10px] flex items-center gap-x-[5px] cursor-pointer transition-colors`}>
                                        <img className={`${activeTab == e.id ? 'invert-100' : ''} transition-colors`} src={e.image} alt="" />
                                        {e.title}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div>
                        

                    </div>
                </div>
            </Modal>
        </div>
    )
}
