import { useChatstore } from "./store";

export function useLatsChats() {
    const chats = useChatstore((state) => state.chats)
    return [...chats]
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
        .slice(0, 7)
};