import { adjustList } from "../adjustList"
import { BlackLines } from "../../../shared/ui/blackLines"

export function PreChatBlock() {
    return (
        <div className="flex flex-col items-center absolute right-0 left-0 mx-auto top-[110px] ml-[350px]">
            <h2 className="text-[32px] px-5 pt-[14px] pb-[7px] bg-white rounded-[90px] mb-[30px]">CHAT Glass</h2>
            <p className="text-4xl mb-[80px]">Good day! How may I assist you today?</p>
            <ul className="flex flex-col gap-y-5">
                {adjustList.map((e) => (
                    <li key={e.id} className="flex gap-x-5 items-center">
                        <div className="w-[140px] pt-[48px] px-[10px] pb-[20px] bg-black text-white rounded-[13px]">
                            <h3 className="text-[18px]">{e.blTitle}</h3>
                            <p className="text-[10px]">{e.blText}</p>
                        </div>
                        <BlackLines />
                        <ul className="grid grid-cols-2 gap-x-5 h-full">
                            <li className="flex flex-col p-[10px] rounded-[14px] bg-white h-full w-[367px]">
                                <div className="w-[50px] h-[50px] rounded-full mb-[15px] bg-blue-200"></div>
                                <h3 className="text-[20px] mb-[9px]">{e.whTitle1}</h3>
                                <div>
                                    <p className="text-[12px]">{e.whText1}</p>
                                    <a href={e.blockLink1}><img src="" alt="" /></a>
                                </div>
                            </li>
                            <li className="flex flex-col p-[10px] rounded-[14px] bg-white h-full w-[367px]">
                                <div className="w-[50px] h-[50px] rounded-full mb-[15px] bg-blue-200"></div>
                                <h3 className="text-[20px] mb-[9px]">{e.whTitle2}</h3>
                                <div>
                                    <p className="text-[12px]">{e.whText2}</p>
                                    <a href={e.blockLink2}><img src="" alt="" /></a>
                                </div>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}