import { SideBar } from "../../../widgets/sidebar"
import { ChatWindow } from "../../../widgets/chatWindow"

export function Chat() {
    return (
        <>
            <div className="flex gap-x-5">
                <SideBar/>
                <ChatWindow />
            </div>
        </>
    )
}