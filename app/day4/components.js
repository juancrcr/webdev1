"use client"
import {useState, useEffect} from "react";
function Woi({ nama, children , className}){
    return( 
    <div className={`text-[30px] font-bold ${className}`}>
        WOI {nama} {children}
        </div>
        );
}
const UseState =()=>{
    const [angka,setAngka]=useState(1);
    const tanganiKlik=()=>{
        setAngka(angka * 2);
    } 
    return(
    <div>
        <button type="button" onClick={tanganiKlik}
        className="bg-[pink] hover:rounded-[50px] hover:bg-[purple] hover:text-[white] duration-350">klik aku</button>
        <h1 className="text-[14px]">Nilai sekarang={angka}</h1>

    </div>
    )
}
const UseEffect =()=>{
    const [data,setData]=useState(0);
    useEffect(function () {
        console.log(123);
        console.log("DRRRRRRRRRRRUAH");
        setData(data + 1);
},[data]);
    return <div> {data} </div>

};

export {Woi, useState, useEffect}