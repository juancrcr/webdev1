"use client";
import { useRef } from "react";
import { useState, useEffect , Woi} from "./components"

import axios from "axios"
    const UseRef =()=>{
    const namaRef = useRef(null);
    console.log (namaRef);
    return <div ref={namaRef} className="bg-[red] w-full"></div>  
    }
    //HTTP request
   const CobaAxios =()=>{
    const [hasil , setHasil] =useState(null);
    useEffect (()=>{
        const init = async()=>{
        const response = await axios.get("https://be-express-pi.vercel.app")
        setHasil(response.data);    
        console.log(response);
        }
        const init2 = async()=>{
        const response = await axios.get("https://be-express-pi.vercel.app/ini-get-array")
        setHasil(response.data);    
        console.log(response);
        }
        const init3 = async()=>{
        const response = await axios.get("https://be-express-pi.vercel.app/ini-get-json")
        setHasil(response.data);    
        console.log(response);
        }
        const init4 = async()=>{
        const response = await axios.post("https://be-express-pi.vercel.app/ini-post"
          , {  nama:"YE",
            angakatan: "sekian"} 
        )
        setHasil(response.data);    
        console.log(response);
        }
        init4();
    },[]);
    
//    if (hasil==null){return <div>loading...</div>}
    return<>{hasil == null ? <div className="font-bold"> Loading... </div>: 
    <div> {JSON.stringify (hasil)}</div> }
    </>;}

export default function Page (){
    // return <UseEffect/>
    // return <UseRef/>
    return <CobaAxios></CobaAxios>
    // return <UseState />
}

// export default function Page (){
//     const DRU=["DRE","SIBAI","KAI"];
//     return(
//     <div className="bg-[red]">day 4
//     {DRU.map(function(value, idx)
//     {return <Woi key={JSON.stringify(value,idx)} 
//     nama={value}>{idx}</Woi>
// })}
//     {/* <Woi NAMA="DRE"/>
//     <Woi NAMA="SIBAI"/>
//     <Woi nama="KAI">  </Woi> */}
//     </div>)
// }
//tanpa map
// export default function Page (){
//     return(
//     <div className="bg-[red]">day 4
//     <Woi> </Woi>
//     <Woi nama="owo"> EAAAA </Woi>
//     <Woi nama="owi" className={"text-[lightblue] !text-[14px]"}></Woi>
//     </div>)
// }