import { useEffect, useState } from "react";
import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {
   const [[n1, n2], setNs] = useState([0,0]);
   useEffect(()=>{
    setNs([n1,n1*2]);
   }, [n1]);
   
  return (
    <div className="w-8/10 h-8/10
                    bg-lime-900 text-white tex-2xl
                    p-10
                    flex flex-col
                    justify-center items-center">
      <span> n1 = {n1} , n2 = {n2} </span>
      <div className="w-full h-full flex justify-center items-center text-left mb-10">
        <MyDiv2 state={[n1, n2]} setter={setNs} />
      </div>
    </div>
  )
}
