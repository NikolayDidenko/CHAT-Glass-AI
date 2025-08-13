
// ЗАГЛУШКА-----------
export function InputTab() {
    return (
        <div className="bg-white p-[6px] rounded-[90px] fixed bottom-[60px] mx-auto right-0 left-0 max-w-[750px] mr-[300px] flex justify-between items-center gap-x-[10px]">
            <button className="min-w-[48px] w-[48px] h-[48px] bg-black rounded-full"><img src="" alt="" /></button>
            <input className="outline-0 h-[20px] w-full" placeholder="Send message to CHAT Glass" type="text" />
            <div className="flex items-center gap-x-[10px]">
                <button className="min-w-[48px] w-[48px] h-[48px] bg-black rounded-full"><img src="" alt="" /></button>
                <button className="min-w-[48px] w-[48px] h-[48px] bg-black rounded-full"><img src="" alt="" /></button>
            </div>
        </div>
    )
}
// -------------------