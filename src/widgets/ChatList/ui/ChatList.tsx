import { useLastChats } from "../../../entities/last_chat/model/selectors";
import { ChatBtn } from "../../../entities/last_chat/ui/last_chat_btn";

export function ChatList() {
    const lastChats = useLastChats();

    return (
        <ul className="flex flex-col gap-y-[45px] mb-10">
            {lastChats.map((chat) => (
                <ChatBtn key={chat.id} chat={chat} />
            ))}
        </ul>
    )
}