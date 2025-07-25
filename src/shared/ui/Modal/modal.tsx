import { useEffect } from "react"

interface Props {
    isOpen: boolean,
    onClose: () => void,
}

export function Modal({isOpen, onClose}: Props) {
    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) document.addEventListener('keydown', onEsc)
        return () => document.removeEventListener('keydown', onEsc)
    }, [isOpen])

    if (!isOpen) return null
    return (
        <div>
            <h2>Settings</h2>
            
        </div>
    )
}