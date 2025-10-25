export default function Page(){
    return(
        <div className=" bg-[blue] relative w-[50%] h-screen">
            <div className="bg-[red] relative w-[300px] h-[400px] " /> 
            <div className="bg-[green] top-[100px] right-[10px] absolute z-100 w-[300px] aspect-[3/4] " /> 
            <div className="bg-gradient-to-r from-[black] to-[purple]  top-[10px] right-[100px] fixed w-[300px] h-[400px] " /> 
            
           </div>
   
    )
}