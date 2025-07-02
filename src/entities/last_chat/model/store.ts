import { create } from "zustand";
import type { Chat } from "./types";

interface ChatState {
    chats: Chat[];
    setChats: (chats: Chat[]) => void;
}

export const useChatstore = create<ChatState>((set) => ({
    chats: [],
    setChats: (chats) => set({ chats })
}));