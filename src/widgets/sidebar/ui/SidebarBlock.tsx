import { Link } from "react-router"
import { CreateChatBtn } from "../../../entities/create_chat_btn"
import { SearchBtn } from "../../../entities/search_btn"
import { ClearChat } from "../../../features/clear_chat"
import { ChatList } from "../../ChatList"
import { ModalBlock } from "../../../entities/Modal" 

export function SideBar() {
    return (
        <div className="fixed flex flex-col top-5 left-5 bottom-5 bg-white rounded-[26px] w-[348px]">
            <h1 className="text-[30px] mb-[30px] pt-[30px] px-[30px]">CHAT Glass</h1>
            <div className="flex gap-x-[10px] mb-[20px] px-[30px]">
                <CreateChatBtn />
                <SearchBtn />
            </div>
            <div className="border-t-2 border-b-2 border-[#F6F6F6] px-[30px] py-5 flex justify-between">
                <p>Your conversations</p>
                <ClearChat />
            </div>
            <ChatList/>
            <div className="flex flex-col justify-end px-[30px] gap-y-3 mb-auto">
                <ModalBlock />
                <Link to='/account' className="flex w-full p-[10px] rounded-[50px] items-center gap-x-[10px] border-2 border-[#F6F6F6] hover:bg-[#4E59FF] hover:text-white transition-colors"><img className="w-[34px] h-[34px] rounded-full bg-black" src="" alt="" />Profile</Link>
            </div>
        </div>
    )
}