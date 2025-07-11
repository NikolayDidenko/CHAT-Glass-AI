import { CreateChatBtn } from "../../../entities/create_chat_btn"
import { SearchBtn } from "../../../entities/search_btn"
import { ClearChat } from "../../../features/clear_chat"

export function SideBar() {
    return (
        <div className="fixed top-5 left-5 bottom-5 bg-white rounded-[26px] w-[348px]">
            <h1 className="text-[30px] mb-[30px] pt-[30px] px-[30px]">CHAT Glass</h1>
            <div className="flex gap-x-[10px] mb-[20px] px-[30px]">
                <CreateChatBtn />
                <SearchBtn />
            </div>
            <div className="border-t-2 border-b-2 border-[#F6F6F6] px-[30px] py-5 flex justify-between">
                <p>Your conversations</p>
                <ClearChat />
            </div>
        </div>
    )
}