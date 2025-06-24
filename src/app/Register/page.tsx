export default function Register() {
    return (
        <div className="flex gap-x-[20px]">
            <div className="rounded-[26px] px-[85px] bg-linear-to-br from-black to-[#4E59FF] bg-no-repeat relative text-white text-center flex justify-center items-center flex-col flex-1/2 overflow-hidden">
                <img className="absolute w-full h-full top-0 bottom-0 right-0 left-0 z-[0]" src="/reg_bg.png" alt="" />
                <strong className="absolute top-[30px] left-[30px] text-[29px]">CHAT Glass</strong>
                <h1 className="text-[45px] z-[1]">Welcome to your best AI friend</h1>
                <p className="text-[26px] max-w-[600px] z-[1]"><span className="text-[#4E59FF]">CHAT AI+</span> - is full free Python chatbot for education, generate images and textes. With <span className="text-[#4E59FF]">CHAT AI+</span> you have all features of paid chatbots, but fully free!</p>
            </div>
            <div className="bg-white px-[110px] py-[90px] h-full rounded-[26px] flex flex-col flex-1/2">
                <h2 className="text-[50px] mb-[20px]">Sign Up</h2>
                <p className="text-[#D9D9D9] text-[18px] mb-[30px]">Login to access your CHAT AI+  account</p>
                <form action="" method="post" className="w-full flex flex-col">
                    <label htmlFor="" className="text-[18px] mb-[15px]">Email Address</label>
                    <input className="bg-[#EDEDED] rounded-[15px] px-[30px] py-[25px] mb-[30px] outline-[#4E59FF]" type="email" name="" id="" placeholder="chatai@gmail.com" />
                    <label className="text-[18px] mb-[15px]" htmlFor="">Password</label>
                    <input className="bg-[#EDEDED] rounded-[15px] px-[30px] py-[25px] mb-[30px] outline-[#4E59FF]" type="password" placeholder="Enter password"/>
                    <p className="text-[14px] mb-[20px]">By registering for an account, you are consenting to our <span className="text-[#4E59FF]">Terms of Service</span> and confirming that you have reviewed and accepted the <span className="text-[#4E59FF]">Global Privacy Statement.</span></p>
                    <button className="bg-[#4E59FF] rounded-[50px] text-white text-[35px] py-[15px] mb-[30px]">Get Started</button>
                </form>
                <p className="text-center text-[20px] mb-[30px]">Already have an account? <a className="text-[#4E59FF]">Login</a></p>
                <div className="flex items-center gap-x-[5px] mb-[20px]">
                    <div className="h-[2px] w-full bg-[#D9D9D9]"></div>
                    <p className="text-nowrap">Or better yet</p>
                    <div className="h-[2px] w-full bg-[#D9D9D9]"></div>
                </div>
                <button className="py-[30px] border-[2px] border-[#D9D9D9] rounded-[50px] mb-[15px] text-[20px]"><img src="" alt="Google" />Continue with Google</button>
                <button className="py-[30px] border-[2px] border-[#D9D9D9] rounded-[50px] text-[20px]"><img src="" alt="IOS" />Continue with Apple</button>
            </div>
        </div>
    )
}