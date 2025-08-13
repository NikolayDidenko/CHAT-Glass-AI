import { InputTab } from "../../../entities/input"
import { PreChatBlock } from "../../prechatMessage"

export function ChatWindow() {
    return (
        <div className="flex flex-col items-center justify-center w-[80%]">
            <PreChatBlock />
            <InputTab />
        </div>
    )
}