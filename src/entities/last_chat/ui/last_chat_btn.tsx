
export function LastChat({chatTitle}: {chatTitle: string}) {
    return (
        <button className="flex gap-x-[10px] items-center"><img src="/chatIcon.svg" alt="" />{chatTitle}</button>
    )
}