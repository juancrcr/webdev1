export default function page() {
return(
<div className="w-full h-screen flex flex-col items-center justify-between bg-gradient-to-b from-[#fffff] to-[#c2c2c2]">
<div className="w-full flex flex-row justify-between p-2">
    <h1 className="[font-bold] text-[30px] ">Chat GPT</h1>
    <img alt="gambar" src="/image2.png" width={50} height={50}/>
</div>
<div className="w-full flex flex-col items-center">
    <h1 className="font-[bold] text-[52px]">New Chat</h1>
    <div className="w-[500px]  max-lg:hidden h-[30px] bg-[#8B8B8B] rounded-[20px]"></div>
    </div>
    <div className="w-full flex flex-row justify-center">
    <div className="w-[500px] lg:hidden m-3 justify-center h-[30px] bg-[#8B8B8B] rounded-[20px]"></div>
</div></div>
)
}