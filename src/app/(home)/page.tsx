

export default function Home() {
  return (
    <div className="bg-[#F0F1F2] relative">
      <aside className="bg-white rounded-[26px] p-[30px] absolute min-w-[350px]">
        <strong className="mb-[30px] text-[29px] block">CHAT Glass</strong>
        <div className="flex gap-x-[10px] text-white mb-[20px]">
          <button className="bg-[#4E59FF] rounded-full flex gap-x-[10px] text-[18px] items-center justify-center w-full"><img className="w-4 h-4" src="/new_chat.svg" alt="" />New chat</button>
          <button className="bg-black rounded-full"><img src="/search.svg" alt="" /></button>
        </div>
        <div className="border-t-[2px] border-b-[2px] border-[#F6F6F6] flex justify-between items-center py-[20px] mb-[15px]">
          <p className="">Your conversations</p>
          <button className="text-[#4E59FF]">Clear All</button>
        </div>
        {/* ------ */}
        <div className="flex justify-center gap-x-[10px] py-[10px] hover:bg-[#4E59FF] hover:rounded-[9px] hover:text-white mb-[15px]">
          <img src="/dialog.svg" alt="" />
          <p>Create HTML Game Environment</p>
        </div>
        {/* ------ */}
        {/* ---------TRASH----------- */}
        <div className="flex justify-center gap-x-[10px] py-[10px] hover:bg-[#4E59FF] hover:rounded-[9px] hover:text-white mb-[15px]">
          <img src="/dialog.svg" alt="" />
          <p>Create HTML Game Environment</p>
        </div>
        <div className="flex justify-center gap-x-[10px] py-[10px] hover:bg-[#4E59FF] hover:rounded-[9px] hover:text-white mb-[15px]">
          <img src="/dialog.svg" alt="" />
          <p>Create HTML Game Environment</p>
        </div>
        <div className="flex justify-center gap-x-[10px] py-[10px] hover:bg-[#4E59FF] hover:rounded-[9px] hover:text-white mb-[15px]">
          <img src="/dialog.svg" alt="" />
          <p>Create HTML Game Environment</p>
        </div>
        <div className="flex justify-center gap-x-[10px] py-[10px] hover:bg-[#4E59FF] hover:rounded-[9px] hover:text-white mb-[15px]">
          <img src="/dialog.svg" alt="" />
          <p>Create HTML Game Environment</p>
        </div>
        <div className="flex justify-center gap-x-[10px] py-[10px] hover:bg-[#4E59FF] hover:rounded-[9px] hover:text-white mb-[15px]">
          <img src="/dialog.svg" alt="" />
          <p>Create HTML Game Environment</p>
        </div>
        <div className="flex justify-center gap-x-[10px] py-[10px] hover:bg-[#4E59FF] hover:rounded-[9px] hover:text-white mb-[15px]">
          <img src="/dialog.svg" alt="" />
          <p>Create HTML Game Environment</p>
        </div>
        {/* ---------TRASH----------- */}
        <div className="border-t-[2px] border-b-[2px] border-[#F6F6F6] flex justify-between items-center py-[20px] mb-[15px]">
          <p className="">Last 7 Days</p>
        </div>
        {/* ---------TRASH----------- */}
        <div className="flex justify-center gap-x-[10px] py-[10px] hover:bg-[#4E59FF] hover:rounded-[9px] hover:text-white mb-[15px]">
          <img src="/dialog.svg" alt="" />
          <p>Create HTML Game Environment</p>
        </div>
        <div className="flex justify-center gap-x-[10px] py-[10px] hover:bg-[#4E59FF] hover:rounded-[9px] hover:text-white mb-[15px]">
          <img src="/dialog.svg" alt="" />
          <p>Create HTML Game Environment</p>
        </div>
        <div className="flex justify-center gap-x-[10px] py-[10px] hover:bg-[#4E59FF] hover:rounded-[9px] hover:text-white mb-[15px]">
          <img src="/dialog.svg" alt="" />
          <p>Create HTML Game Environment</p>
        </div>
        {/* ---------TRASH----------- */}
        <button className="flex gap-x-[10px] items-center justify-start border-[1px] border-[#F6F6F6] w-full rounded-full py-[10px] px-[10px] mb-[10px]"><img src="/settings.svg" alt="" /> Settings</button>
        <button className="flex gap-x-[10px] items-center justify-start border-[1px] border-[#F6F6F6] w-full rounded-full py-[10px] px-[10px]"><div className="w-[34px] h-[34px] bg-pink-300 rounded-full"></div>Andrew Neilson<img src="" alt="" /></button>
      </aside>
    </div>
  );
}
