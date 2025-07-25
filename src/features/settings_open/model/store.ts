import { create } from "zustand";

type SettingsStore = {
    isOpen: boolean,
    open: () => void,
    close: () => void
}

export const useSettingsBtn = create<SettingsStore>((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false})
})) 