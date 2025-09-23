"use client";
import {useRef, useState}  from "react"
import axios from "axios"
const Container = ({children})=> {
  return <div className="bg-[white] gap-2 flex items-center flex-col p-2 rounded-[10px]">{children}</div>;
};    

export default function Page (){
    const [hasil,setHasil]  = useState(null)
    // const [isi,hasilIsi] =useState("") salah, pakai useRef
    const isiRef =useRef (null)
    // handlechange gaperlu
    // const handleChange = ()=>{ 
    // }
    const handleSubmit = async()=>{ //bisa dikasi async karna bukan dalam useEffect
        //fetch API dari isiRef
        const isi = isiRef.current.value;
        const response =await axios.post 
        ("https://be-express-pi.vercel.app/ini-post",
            {masukan: isi,}
        )  
        //set hasilnya
        setHasil(response.data)
    isiRef.current.value = "";
    }
return(
    <main className="w-full text-4xl flex-col gap-2 font-bold flex items-center justify-center h-screen bg-gradient-to-t from-[#FFFFFF] to-[#AAAAAA]">
    <Container> 
    <h1>Form</h1> 
    <input
    ref={isiRef}
    className="bg-[#BBBBBB] p-2 outline-0 text-center text-xl font-[500]"/>
    <button type="button" onClick={handleSubmit}
     className="text-3xl bg-[#CBC3E3] rounded-[5px] p-2 hover:bg-[purple] hover:text-[white] duration-[400ms]">
    kumpul</button>
    </Container>
    <Container> 
    <h1>hasil</h1>
    {hasil !== null ? <div>{JSON.stringify(hasil)}
    </div>:
     <div>Belum ada hasil</div>}
     </Container>
    </main>
)
}



