import type { Chat } from "../model/types"

interface Props {
    chat: Chat;
    onClick?: (chatId: string) => void; 
}

export function ChatBtn ({ chat, onClick }: Props) {
    return (
        <button className="" onClick={() => onClick?.(chat.id)}><img src="/chatIcon.svg" alt="" />
            {chat.title || 'No name'}
        </button>
    )
}