import { Link } from "react-router"
import { ChatGlassLogo } from "../../../shared/ui"
import { RegBtn } from "../../../entities/regBtn"
import { GoogleBtn } from "../../../entities/googleBtn"
import { AppleBtn } from "../../../entities/appleBtn"

export function SignUp() {
    return (
        <div className="flex gap-x-5">
            <div className=" relative rounded-[26px] p-[30px] bg-black flex-1/2 text-white flex flex-col items-center justify-center">
                <ChatGlassLogo />
                <h1 className="text-[45px] mb-[30px]">Welcome to your best AI friend</h1>
                <p className="text-[26px] text-center"><span className="text-[#4E59FF]">CHAT Glass AI</span> - is full free Python chatbot for education, generate images and textes. With <span className="text-[#4E59FF]">CHAT Glass AI</span> you have all features of paid chatbots, but fully free!</p>
            </div>
            <div className="bg-white rounded-[26px] px-[110px] h-full flex flex-col flex-1/2 py-[20px]">
                <h2 className="text-[50px] mb-5">Sign Up</h2>
                <p className="text-[18px] mb-[30px] text-[#D9D9D9]">Login to access your CHAT AI+  account</p>
                <form action="">
                    <div className="flex flex-col gap-y-[15px] mb-[30px]">
                        <label className="text-[18px]" htmlFor="">Email Address</label>
                        <input className="bg-[#EDEDED] rounded-[15px] px-[30px] pt-[20px] pb-[15px] text-[20px] border-[2px] border-transparent hover:border-[#4E59FF] transition-colors" type="email" placeholder="chatai@gmail.com" name="" id="" />
                    </div>
                    <div className="flex flex-col gap-y-[15px] mb-[30px]">
                        <label className="text-[18px]" htmlFor="">Password</label>
                        <input className="bg-[#EDEDED] rounded-[15px] px-[30px] pt-[20px] pb-[15px] text-[20px] border-[2px] border-transparent hover:border-[#4E59FF] transition-colors" type="password" placeholder="Enter password" name="" id="" />
                    </div>
                    <p className="text-[14px] mb-[20px]">By registering for an account, you are consenting to our <Link className="text-[#4E59FF]" to='/'>Terms of Service</Link> and confirming that you have reviewed and accepted the <a className="text-[#4E59FF]" href="">Global Privacy Statement.</a></p>
                </form>
                <RegBtn />
                <p className="text-center mb-[30px]">Already have an account? <Link to='/sign-in' className="text-[#4E59FF]">Sign In</Link></p>
                <div className="flex items-center gap-x-[5px] mb-[20px]">
                    <div className="w-full h-[2px] rounded-[3px] bg-[#D9D9D9]"></div>
                    <p className=" text-nowrap text-[#D9D9D9]">Or better yet</p>
                    <div className="w-full h-[2px] rounded-[3px] bg-[#D9D9D9]"></div>
                </div>
                <div className="flex flex-col gap-y-[15px]">
                    <GoogleBtn />
                    <AppleBtn />
                </div>
            </div>
        </div>
    )
}