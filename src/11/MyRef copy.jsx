import { useState, useEffect, useRef } from "react";
import TailButton from "../UI/TailButton"

export default function MyRef() {
    //컴포넌트 변수
    let cnt = 0;
    const handleCnt = () =>{
        cnt = cnt + 1;
        console.log(cnt);
    };

    //state 변수
    const [stCnt, setStCnt] = useState(0);
    const handleStCnt = () => {
        setStCnt(stCnt + 1);
        console.log("stCnt = "+ stCnt);
    };
    useEffect(()=>{
        console.log("stCnt showed by useEffect"+stCnt);
    }, [stCnt]);

    //Ref 변수
    const refCnt = useRef(0);
    const handleRefCnt = () => {
        refCnt.current = refCnt.current + 1;
        console.log("refCnt = "+refCnt.current);
    };

  return (
    <div className="w-full flex justify-center items-start mt-10">
      <div className="w-10/12 grid grid-cols-3 gap-4 gap-x-8">
        <div className="flex justify-center font-bold text-2xl p-2 border border-dotted rounded-lg">
            컴포넌트 변수 {cnt}
        </div>
        <div className="flex justify-center font-bold text-2xl p-2 border border-dotted rounded-lg">
            State 변수 {stCnt}
        </div>
        <div className="flex justify-center font-bold text-2xl p-2 border border-dotted rounded-lg">
            Ref 변수 {refCnt.current}
        </div>
        <TailButton msg="컴포넌트 변수 증가" cn="bg-blue-500 rounded-lg p-2 hover:bg-blue-400" action={handleCnt} />
        <TailButton msg="State 변수 증가" cn="bg-blue-500 rounded-lg p-2 hover:bg-blue-400" action={handleStCnt} />
        <TailButton msg="Ref 변수 증가" cn="bg-blue-500 rounded-lg p-2 hover:bg-blue-400" action={handleRefCnt} />
      </div>
    </div>
  )
}
