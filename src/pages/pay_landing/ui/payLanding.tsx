import { ChatGlassLogo } from "../../../shared/ui"
import { BackChat } from "../../../shared/ui"
import { Link } from "react-router"

export function PayLanding() {
    return (
        <>
            <div className="mb-5 flex flex-col gap-y-[60px] items-center justify-center px-[281px] pt-[220px] pb-[100px] bg-blue-950 rounded-[26px] relative">
                <ChatGlassLogo/>
                <BackChat />
                <h1 className="text-white text-[55px] max-w-[1000px] text-center">TRY FULL POWER OF CHAT GLASS WITH CHAT GLASS PRO</h1>
                {/* ПЕРЕДЕЛАТЬ НА GRID */}
                <ul className="flex gap-x-[60px]">
                    <li className="bg-black w-[400px] h-[400px] rounded-[20px] p-[30px] text-white flex flex-col justify-between">
                        <p className="text-[35px]">Communicate with CHAT Glass PRO</p>
                        <button className="rounded-[4px] pt-[15px] pb-[10px] bg-green-400 w-full text-[25px]">Try CHAT Glass PRO</button>
                    </li>
                    <li className="bg-black w-[400px] h-[400px] rounded-[20px] p-[30px] text-white flex flex-col justify-between">
                        <p className="text-[35px]">Export images with original quality</p>
                        <button className="rounded-[4px] pt-[15px] pb-[10px] bg-green-400 w-full text-[25px]">Try CHAT Glass PRO</button>
                    </li>
                    <li className="bg-black w-[400px] h-[400px] rounded-[20px] p-[30px] text-white flex flex-col justify-between">
                        <p className="text-[35px]">Access to the Chat Glass voice assistant</p>
                        <button className="rounded-[4px] pt-[15px] pb-[10px] bg-green-400 w-full text-[25px]">Try CHAT Glass PRO</button>
                    </li>
                </ul>
            </div>
            <div className="flex gap-x-[20px] mb-5">
                <div className="bg-emerald-400 rounded-[26px] p-[50px] flex-1/2 flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-[80px]">
                            <h2 className="text-[50px]">CHAT Glass PRO </h2>
                            <span className="px-[30px] pt-[10px] pb-[7px] bg-white">Beginner</span>
                        </div>
                        <ul className="flex flex-col gap-y-[30px]">
                            <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>Fully access to  CHAT Glass PRO</li>
                            <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>1000 requests per day</li>
                            <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>Standard speed of answer </li>
                            <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>50 request templates</li>
                        </ul>
                    </div>
                    <Link className="text-center justify-end block text-[45px] bg-white text-black rounded-[24px] pt-[20px] pb-[15px] w-full" to=''>BUY NOW</Link>
                </div>
                <div className="bg-fuchsia-600 rounded-[26px] p-[50px] flex-1/2">
                    <div className="flex justify-between items-center mb-[80px]">
                        <h2 className="text-[50px]">CHAT Glass PRO </h2>
                        <span className="px-[30px] pt-[10px] pb-[7px] bg-white">Middle</span>
                    </div>
                    <ul className="flex flex-col gap-y-[30px]">
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>All Beginner functions</li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>2000 requests per day</li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>Fast speed of answer </li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>100 request templates</li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>50 request  to generate images </li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>50 request  to generate images </li>
                    </ul>
                    <Link className="text-center justify-end block text-[45px] bg-white text-black rounded-[24px] pt-[20px] pb-[15px] w-full" to=''>BUY NOW</Link>
                </div>
            </div>
            <div className="bg-red-500 rounded-[26px] p-[50px]">
                <div className="flex justify-between items-center mb-[80px]">
                    <h2 className="text-[50px]">CHAT Glass PRO </h2>
                    <span className="px-[30px] pt-[10px] pb-[7px] bg-white">Master</span>
                </div>
                <div>
                    <ul className="flex flex-col gap-y-[30px]">
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>All Middle functions</li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>Infinite requests per day</li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>Fast speed of answer </li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>Full access to request templates collection</li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>Infinite request  to generate images </li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>Access to train model to suit your needs</li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>Access to CHAT Glass Voice Assistant</li>
                        <li className="text-[30px] text-white flex items-center gap-x-[10px]"><div className="mb-[5px] w-[20px] h-[20px] rounded-full bg-white"></div>Liquid Glass theme access</li>
                    </ul>
                    <div>
                        <div>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                        <Link className="text-center justify-end block text-[45px] bg-white text-black rounded-[24px] pt-[20px] pb-[15px] w-full" to='/'>BUY NOW</Link>
                    </div>
                </div>
            </div>
        </>
    )   
}